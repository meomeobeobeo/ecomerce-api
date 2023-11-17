import { IsEmail } from 'class-validator';
import { PrismaService } from '../prisma/prisma.service';
import { Body, Inject, Injectable, Param } from '@nestjs/common';
import { LoginInforForm, RegisterInforForm } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { HelperService } from 'src/helper/helper.service';
import { OtpService, ResultOtp } from 'src/otp/otp.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager'
@Injectable()
export class AuthService {
    constructor(@Inject(CACHE_MANAGER) private cacheService: Cache , private prismaService: PrismaService, private helper: HelperService , private otpService : OtpService) {

    }

    async createVerifyOtpEmail(){


    }
    async createVerifyPhoneNumber(){

    }
    async verifyOtp(){
        /*
        @Param 
        type_otp : string
        key : string
        value_verify : string
        user_id : string
        @description
        verify otp 
        value_otp compare with hash value with key.
        

        */ 


    }

    async register(registerInfor: RegisterInforForm) {

        try {
            let { email, password, userName, phone_number } = registerInfor

            let existedUser = await this.prismaService.site_user.findMany({
                where: {
                    email: email
                }
            })

            if (existedUser.length > 0) {
                return {
                    errorCode: 400,
                    message: "email user existed.",
                    metaData: ''
                }
            }

            let otpResult = await this.otpService.generateNewOtp(6 , {
                user_id : null ,
                email : email,
                type_otp: 'VERIFY_EMAIL',
            })

            // send code to email


            let value = await this.cacheService.set(`otp:${otpResult.otpObject.email}` , otpResult.otpObject , {ttl : 190})
            let valueget = await this.cacheService.get(`otp:${otpResult.otpObject.email}`)
            console.log(valueget)

            // const salt = await bcrypt.genSalt(10)
            // const hashPassword = await bcrypt.hash(password, salt)
            // const newUser = await this.prismaService.site_user.create({
            //     data: {
            //         id: this.helper.generateId(16),
            //         email: email,
            //         userName: userName,
            //         phone_number: phone_number

            //     }
            // })

            // const user_auth = await this.prismaService.auth.create({
            //     data: {
            //         id: this.helper.generateId(16),
            //         user_id: newUser.id,
            //         phone_number: phone_number,
            //         password: hashPassword,
            //         userName: newUser.userName,
            //         email: newUser.email
            //     }
            // })

            return {
                errorCode: 200,
                message: "Please verify OTP",
                metaData: {
                    otpCode : otpResult.valueOtp
                }
            }






        } catch (error) {
            console.log(error)
            return {
                errorCode: 500,
                message: error,
                metaData: ''
            }


        }

    }
    async loginWithPassWord(loginInfor: LoginInforForm) {


        try {
            let { email, password } = loginInfor
            let existedUser = await this.prismaService.site_user.findFirst({
                where: {
                    email: email
                }
            })

            if (existedUser) {
                return {
                    errorCode: 404,
                    message: "User not found with email.",
                    metaData: ''
                }
            }
            let auth_infor = await this.prismaService.auth.findUnique({
                where: {
                    user_id: existedUser.id
                }
            })
            if (auth_infor) {
                return {
                    errorCode: 409,
                    message: "Conflict with account information. Please contact us..",
                    metaData: ''
                }
            }

            


        } catch (error) {
            return {
                errorCode: 500,
                message: error,
                metaData: ''
            }
        }



        return 'login with password'
    }
}
