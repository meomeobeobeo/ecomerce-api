import { IsNotEmpty } from 'class-validator'

export class Devide {
    @IsNotEmpty()
    user_id: string
    os: string
    osVersion: string
    browser: string
    browserVersion: string
    status: 'active' | 'inactive' | 'lock'

    devide_id: string

    @IsNotEmpty()
    ip: string
}
