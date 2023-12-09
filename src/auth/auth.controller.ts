import { Body, Controller, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common'
import { AuthService } from './auth.service'
import { Request, Response } from 'express'
import { EmailInfor, LoginInforForm, OtpLoginDevideInfor, OtpRegisterInfor, RegisterInforForm } from './dto/auth.dto'
import constant from 'src/constant'
import typeOtp from 'src/constant/typeOtp'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @UsePipes(new ValidationPipe())
    @Post('/register/info')
    async register(@Body() emailInfor: EmailInfor, @Req() req: Request, @Res() res: Response) {
        let result = await this.authService.registerWithEmail(emailInfor.email, constant.typeOtp.VERIFY_EMAIL)

        res.json({ message: result })
        return result
    }
    @UsePipes(new ValidationPipe())
    @Post('/register/verifyOtpWithEmail')
    async verifyOtpWithEmail(@Body() otpInfor: OtpRegisterInfor, @Req() req: Request, @Res() res: Response) {
        let isVerify = await this.authService.verifyOtp({
            verifyInformation: otpInfor.email,
            typeOtp: otpInfor.typeOtp,
            otpCode: otpInfor.otpCode,
        })
        if (isVerify === -1) {
            res.json({
                statusCode: 400,
                message: 'error when verify otp',
                metaData: '',
            })
        } else if (isVerify === 0) {
            res.json({
                statusCode: 400,
                message: 'verify otp failed.',
                metaData: '',
            })
        } else {
            let result = await this.authService.createUserInfomation({
                email: otpInfor.email,
                password: otpInfor.password,
                phone_number: otpInfor.phone_number,
                userName: otpInfor.userName,
            })

            res.json(result)
        }
    }

    @Post('/loginWithPassword')
    @UsePipes(new ValidationPipe())
    async login(@Body() loginInfor: LoginInforForm, @Req() req: Request, @Res() res: Response) {
        let result = await this.authService.loginWithPassWord(loginInfor)

        res.json(result)
        return result
    }
    @UsePipes(new ValidationPipe())
    @Post('/login/verifyOtpDevideWithEmail')
    async verifyOtpDevideWithEmail(@Body() otpInfor: OtpLoginDevideInfor, @Req() req: Request, @Res() res: Response) {
        let isVerify = await this.authService.verifyOtp({
            verifyInformation: otpInfor.email,
            typeOtp: otpInfor.typeOtp,
            otpCode: otpInfor.otpCode,
        })
        if (isVerify === -1) {
            res.json({
                statusCode: 400,
                message: 'error when verify otp',
                metaData: '',
            })
        } else if (isVerify === 0) {
            res.json({
                statusCode: 400,
                message: 'verify otp failed.Otp not true.',
                metaData: '',
            })
        } else {
            // create devide information
            // create session user login in current devide include token , refresh

            this.authService.createDevideInfor({
                os: otpInfor.os,
                osVersion: otpInfor.osVersion,
                browser: otpInfor.browser,
                browserVersion: otpInfor.browserVersion,
                devide_id: otpInfor.devide_id,
                ip: otpInfor.ip,
                status: 'active',
                email: otpInfor.email,
            })

            const data = await this.authService.createUserLoginSession(otpInfor.email, otpInfor.devide_id)

            res.json({
                statusCode: 200,
                message: 'verify otp true.',
                metaData: data,
            })
        }
    }
}
