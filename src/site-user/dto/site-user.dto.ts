import { Expose } from 'class-transformer'
import { IsNotEmpty } from 'class-validator'

export class SiteUserDto {
    @Expose()
    @IsNotEmpty()
    email_address: string

    @Expose()
    @IsNotEmpty()
    phone_number: string

    @Expose()
    status: 'active' | 'lock' | 'inactive' // is active , lock , inactive

    @Expose()
    avatar: string

    @Expose()
    birth_day: string

    @Expose()
    userName: string
}
