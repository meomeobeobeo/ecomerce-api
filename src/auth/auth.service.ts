import { IsEmail } from 'class-validator'
import { PrismaService } from '../prisma/prisma.service'
import { Body, Inject, Injectable, Param } from '@nestjs/common'
import { LoginInforForm, RegisterInforForm } from './dto/auth.dto'
import * as bcrypt from 'bcrypt'
import { HelperService } from 'src/helper/helper.service'
import { OtpService, ResultOtp } from 'src/otp/otp.service'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Cache } from 'cache-manager'
@Injectable()
export class AuthService {
    constructor(
        @Inject(CACHE_MANAGER) private cacheService: Cache,
        private prismaService: PrismaService,
        private helper: HelperService,
        private otpService: OtpService
    ) {}

    async createVerifyOtpEmail() {}
    async createVerifyPhoneNumber() {}
    async verifyOtp(
        email: string,
        otpCode: string,
        userData: RegisterInforForm
    ) {
        /*
        @Param 
        type_otp : string
        key : string
        value_verify : string
        user_id : string
        @description
        verify otp 
        value_otp compare with hash value with key.
        create document site_user , document auth , save in mysql
        */
        try {
            let otpObject: any = await this.cacheService.get(
                `otp:${email}`
            )

            let otpHash = otpObject?.value
            let verifyOtpCode = await bcrypt.compare(otpCode, otpHash)

            if (verifyOtpCode) {
                const salt = await bcrypt.genSalt(10)
                const hashPassword = await bcrypt.hash(userData.password, salt)
                const newUser = await this.prismaService.site_user.create({
                    data: {
                        id: this.helper.generateId(16),
                        email: email,
                        userName: userData.userName,
                        phone_number: userData.phone_number,
                    },
                })

                const user_auth = await this.prismaService.auth.create({
                    data: {
                        id: this.helper.generateId(16),
                        user_id: newUser.id,
                        phone_number: userData.phone_number,
                        password: hashPassword,
                        userName: newUser.userName,
                        email: newUser.email,
                    },
                })

                return {
                    statusCode: 202,
                    message:
                        'Register successfully. You can login in new devide.',
                    metaData: '',
                }
            } else {
                return {
                    statusCode: 400,
                    message: 'Verify otp failed.Please re-enter the code',
                    metaData: '',
                }
            }
        } catch (error) {
            console.log(error)
            return {
                statusCode: 500,
                message: error,
                metaData: '',
            }
            
        }
    }

    async registerWithEmail(email : string) {
        try {
            

            let existedUser = await this.prismaService.site_user.findMany({
                where: {
                    email: email,
                },
            })

            if (existedUser.length > 0) {
                return {
                    statusCode: 400,
                    message: 'email user existed.',
                    metaData: '',
                }
            }

            let otpResult = await this.otpService.generateNewOtp(6, {
                user_id: null,
                email: email,
                type_otp: 'VERIFY_EMAIL',
            })

            // send code to email

            let value = await this.cacheService.set(
                `otp:${otpResult.otpObject.email}`,
                otpResult.otpObject,
                { ttl: 190 }
            )
           
            let email_title = 'Your verify otp for sign up is:'

            let send_email = this.helper.sendEmail('meotrangbeonknd@gmail.com' , 'HELLO THIS IS MAIL FROM MEOECO' , `<h3>${email_title} : </h3><span>${otpResult.valueOtp}</span>`)

           

            return {
                statusCode: 200,
                message: 'Please verify OTP',
                metaData: {
                    otpCode: otpResult.valueOtp,
                },
            }
        } catch (error) {
            console.log(error)
            return {
                statusCode: 500,
                message: error,
                metaData: '',
            }
        }
    }
    async loginWithPassWord(loginInfor: LoginInforForm) {
        try {
            let { email, password } = loginInfor
            let existedUser = await this.prismaService.site_user.findFirst({
                where: {
                    email: email,
                },
            })

            if (existedUser) {
                return {
                    statusCode: 404,
                    message: 'User not found with email.',
                    metaData: '',
                }
            }
            let auth_infor = await this.prismaService.auth.findUnique({
                where: {
                    user_id: existedUser.id,
                },
            })
            if (auth_infor) {
                return {
                    statusCode: 409,
                    message:
                        'Conflict with account information. Please contact us..',
                    metaData: '',
                }
            }
        } catch (error) {
            return {
                statusCode: 500,
                message: error,
                metaData: '',
            }
        }

        return 'login with password'
    }
}
