import { Expose } from "class-transformer"
import { IsEmail, IsNotEmpty } from "class-validator"

export class AuthDto{

    @Expose()
    @IsNotEmpty()
    userId : string

    @Expose()
    @IsNotEmpty()
    phoneNumber : string

    @IsNotEmpty()
    password : string

    @IsNotEmpty()
    askChangePwd : boolean

    @IsNotEmpty()
    isDeleted : boolean

    
    status : 'active' | 'inactive' | 'lock'
    
    @IsNotEmpty()
    userName : string

}

export class RegisterInforForm {
    @IsNotEmpty()
    userName : string

    @IsNotEmpty()
    @IsEmail()
    email : string

    @IsNotEmpty()
    password : string
    @IsNotEmpty()
    phone_number : string
}
export class LoginInforForm {
    @IsNotEmpty()
    @IsEmail()
    email : string

    @IsNotEmpty()
    password : string
}
export class OtpInfor extends RegisterInforForm {

    @IsNotEmpty()
    otpCode : string
}
export class EmailInfor {
    @IsNotEmpty()
    @IsEmail()
    email : string 
}