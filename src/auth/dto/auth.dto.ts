import { Expose } from 'class-transformer'
import { IsEmail, IsNotEmpty } from 'class-validator'

export class AuthDto {
    @Expose()
    @IsNotEmpty()
    userId: string

    @Expose()
    @IsNotEmpty()
    phoneNumber: string

    @IsNotEmpty()
    password: string

    @IsNotEmpty()
    askChangePwd: boolean

    @IsNotEmpty()
    isDeleted: boolean

    status: 'active' | 'inactive' | 'lock'

    @IsNotEmpty()
    userName: string
}

export class RegisterInforForm {
    @IsNotEmpty()
    userName: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    password: string

    phone_number: string
}
export class LoginInforForm {
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    password: string

    os: string
    osVersion: string
    browser: string
    browserVersion: string

    @IsNotEmpty()
    devide_id: string

    @IsNotEmpty()
    ip: string

    // @IsNotEmpty()
    // otpCode: string

    // @IsNotEmpty()
    // typeOtp : string
}

export class OtpRegisterInfor extends RegisterInforForm {
    @IsNotEmpty()
    otpCode: string

    @IsNotEmpty()
    typeOtp: string
}
export class OtpLoginDevideInfor extends LoginInforForm {
    @IsNotEmpty()
    otpCode: string

    @IsNotEmpty()
    typeOtp: string
}
export class EmailInfor {
    @IsNotEmpty()
    @IsEmail()
    email: string
}
