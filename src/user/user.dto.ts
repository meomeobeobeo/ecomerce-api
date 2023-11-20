import { Expose } from 'class-transformer'
import { IsNotEmpty, Length, isNotEmpty } from 'class-validator'

export class Users {
    @Expose()
    @IsNotEmpty()
    userName: string

    @Expose()
    @IsNotEmpty()
    @Length(6, 20)
    password: string

    @Expose()
    avatar: string
}
