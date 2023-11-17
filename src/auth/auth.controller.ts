import { Body, Controller, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import {  LoginInforForm, RegisterInforForm } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {

  }

  @UsePipes(new ValidationPipe())
  @Post('/register')
  async register(@Body() registerInfor:RegisterInforForm , @Req() req:Request , @Res() res:Response){

    
    let result = await this.authService.register(registerInfor)

    

    res.json({message: result})
    return result
  }

  @Post('/loginWithPassword')
  async login(@Body() loginInfor : LoginInforForm , @Req() req:Request , @Res() res:Response){
    let result = await this.authService.loginWithPassWord(loginInfor)
    return result
  }
}
