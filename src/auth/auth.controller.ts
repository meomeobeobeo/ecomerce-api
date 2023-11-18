import {
    Body,
    Controller,
    Post,
    Req,
    Res,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { Request, Response } from 'express'
import { EmailInfor, LoginInforForm, OtpInfor, RegisterInforForm } from './dto/auth.dto'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @UsePipes(new ValidationPipe())
    @Post('/register/info')
    async register(
        @Body() emailInfor : EmailInfor,
        @Req() req: Request,
        @Res() res: Response
    ) {
        let result = await this.authService.registerWithEmail(emailInfor.email)

        res.json({ message: result })
        return result
    }
    @UsePipes(new ValidationPipe())
    @Post('/register/verifyOtpWithEmail')
    async verifyOtpWithEmail(
        @Body() otpInfor: OtpInfor,
        @Req() req: Request,
        @Res() res: Response
    ) {
        let result = await this.authService.verifyOtp(
            otpInfor.email,
            otpInfor.otpCode,
            {
              email : otpInfor.email,
              userName :  otpInfor.userName,
              phone_number : otpInfor.phone_number,
              password : otpInfor.password

            }
        )
        res.json(result)


    }

    @Post('/loginWithPassword')
    async login(
        @Body() loginInfor: LoginInforForm,
        @Req() req: Request,
        @Res() res: Response
    ) {
        let result = await this.authService.loginWithPassWord(loginInfor)
        return result
    }
}
