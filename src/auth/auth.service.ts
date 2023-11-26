import { IsEmail } from 'class-validator'
import { PrismaService } from '../prisma/prisma.service'
import { Body, Inject, Injectable, Param } from '@nestjs/common'
import { LoginInforForm, RegisterInforForm } from './dto/auth.dto'
import * as bcrypt from 'bcrypt'
import { HelperService } from 'src/helper/helper.service'
import { OtpService, ResultOtp } from 'src/otp/otp.service'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Cache } from 'cache-manager'
import constant from 'src/constant'
import { Devide } from 'src/devide/dto/devide.dto'
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'

interface VerifyOtpField {
    verifyInformation: string // as information of email , value of phone number
    typeOtp: string
    otpCode: string
}
interface DevideInforForm {
    os: string
    osVersion: string
    browser: string
    browserVersion: string
    devide_id: string
    ip: string
    status: 'active'
    email: string
}
@Injectable()
export class AuthService {
    constructor(
        @Inject(CACHE_MANAGER) private cacheService: Cache,
        private prismaService: PrismaService,
        private helper: HelperService,
        private otpService: OtpService,
        private jwtService: JwtService,
        private configService: ConfigService,
    ) {}

    async createUserInfomation(userData: RegisterInforForm) {
        try {
            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(userData.password, salt)
            const newUser = await this.prismaService.site_user.create({
                data: {
                    id: this.helper.generateId(16),
                    email: userData.email,
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
                message: 'Register successfully. You can login in new devide.',
                metaData: '',
            }
        } catch (error) {
            console.log(error)
            return {
                statusCode: 500,
                message: error?.message,
                metaData: '',
            }
        }
    }

    async verifyOtp(verifyOtpField: VerifyOtpField) {
        try {
            let otpObject: any = await this.cacheService.get(
                `otp:${verifyOtpField.typeOtp}:${verifyOtpField.verifyInformation}`,
            )
            console.log(
                `otp:${verifyOtpField.typeOtp}:${verifyOtpField.verifyInformation}`,
            )
            let otpHash = otpObject?.value
            let verifyOtpCode = await bcrypt.compare(
                verifyOtpField.otpCode,
                otpHash,
            )
            if (verifyOtpCode) {
                return 1
            } else {
                return 0
            }
        } catch (error) {
            console.log(error)
            return -1
        }
    }

    async registerWithEmail(email: string, typeOtp: string) {
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
                type_otp: constant.typeOtp.VERIFY_EMAIL,
                phone_number: null,
            })

            // send code to email

            let value = await this.cacheService.set(
                `otp:${typeOtp}:${otpResult.otpObject.email}`,
                otpResult.otpObject,
                { ttl: 190 },
            )

            let email_title = 'Your verify otp for sign up is:'

            let send_email = this.helper.sendEmail(
                'meotrangbeonknd@gmail.com',
                'HELLO THIS IS MAIL FROM MEOECO',
                `<h3>${email_title} : </h3><span>${otpResult.valueOtp}</span>`,
            )

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
                message: error?.message,
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

            if (!existedUser) {
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
            if (!auth_infor) {
                return {
                    statusCode: 409,
                    message:
                        'Conflict with account information. Please contact us..',
                    metaData: '',
                }
            }
            let hashPassword = auth_infor.password
            const verifyPassWord = await bcrypt.compare(password, hashPassword)
            if (!verifyPassWord) {
                return {
                    statusCode: 401,
                    message: 'Password failed.',
                    metaData: '',
                }
            }
            // check devide information
            let currentDevideInfor = await this.prismaService.devide.findMany({
                where: {
                    devide_id: loginInfor.devide_id,
                    user_id : existedUser.id
                },
            })

            if (currentDevideInfor.length > 0) {
                let devideInfor = currentDevideInfor[0]
                let statusInfor = devideInfor.status
                if (statusInfor === 'lock') {
                    return {
                        statusCode: 400,
                        message: 'This devide is locked.Please contact admin.',
                        metaData: {},
                    }
                } else if (statusInfor === 'inactive') {
                    return {
                        statusCode: 400,
                        message:
                            'This devide is inactive.Please contact admin.',
                        metaData: {},
                    }
                } else {
                    // generate token , return information
                    const token = await this.createTokenJwt(
                        existedUser.id,
                        email,
                        devideInfor.devide_id,
                    )

                    //can cache token in redis here


                    return {
                        statusCode: 200,
                        message: 'Login success.',
                        metaData: {
                            userInfor: {
                                id: existedUser.id,
                                birth_day: existedUser.birth_day,
                                userName: existedUser.userName,
                                avatar: existedUser.avatar,
                                phone_number: existedUser.phone_number,
                                email: existedUser.email,
                            },
                            token: token,
                        },
                    }
                }
            }

            // if not have log in in this devide , verify current login devide by otp code
            //create otp , cache in redis , verify otp
            const otpResult = await this.otpService.generateNewOtp(6, {
                email: loginInfor.email,
                phone_number: '',
                type_otp: constant.typeOtp.VERIFY_DEVIDE,
                user_id: existedUser.id,
            })
            // cache otp in redis
            let value = await this.cacheService.set(
                `otp:${constant.typeOtp.VERIFY_DEVIDE}:${otpResult.otpObject.email}`,
                otpResult.otpObject,
                { ttl: 190 },
            )
            const email_title = 'This is otp for verify your devide.'
            let send_email = this.helper.sendEmail(
                'meotrangbeonknd@gmail.com', // email account
                'HELLO THIS IS MAIL FROM MEOECO',
                `<h3>${email_title} : </h3><span>${otpResult.valueOtp}</span>`,
            )

            return {
                statusCode: 202,
                message: 'Please enter otp to verify this devide.',
                metaData: {
                    otpCode: otpResult.valueOtp,
                },
            }
        } catch (error) {
            return {
                statusCode: 500,
                message: error?.message,
                metaData: '',
            }
        }
    }

    async createDevideInfor(devideInfor: DevideInforForm) {
        try {
            let userInformation = await this.prismaService.site_user.findUnique(
                {
                    where: { email: devideInfor.email },
                },
            )

            let createdDevide = await this.prismaService.devide.create({
                data: {
                    id: this.helper.generateId(6),
                    devide_id: devideInfor.devide_id,
                    browser: devideInfor.browser,
                    browserVersion: devideInfor.browserVersion,
                    ip: devideInfor.ip,
                    os: devideInfor.os,
                    osVersion: devideInfor.osVersion,
                    status: devideInfor.status,
                    user_id: userInformation.id,
                },
            })
        } catch (error) {
            console.log(error)
            return {
                statusCode: 500,
                message: error?.message,
                metaData: '',
            }
        }
    }
    async createTokenJwt(
        userId: string,
        email: string,
        devide_id: string,
    ): Promise<string> {
        const payload = {
            id: userId,
            email: email,
            devide_id: devide_id,
        }

        return this.jwtService.signAsync(payload, {
            expiresIn: '10m',
            secret: this.configService.get('JWT_SECRET'),
        })
    }

    async createUserLoginSession(email: string, devide_id: string) {
        try {
            let userInformation = await this.prismaService.site_user.findUnique(
                {
                    where: { email: email },
                },
            )
            const token = await this.createTokenJwt(
                userInformation.id,
                email,
                devide_id,
            )

            return {
                userInfor: {
                    id: userInformation.id,
                    birth_day: userInformation.birth_day,
                    userName: userInformation.userName,
                    avatar: userInformation.avatar,
                    phone_number: userInformation.phone_number,
                    email: userInformation.email,
                },
                token: token,
            }
        } catch (error) {
            return {
                statusCode: 500,
                message: error?.message,
                metaData: '',
            }
        }
    }

    // action when log out
    async deleteUserLoginSession() {}
}
