import { IsEmail } from 'class-validator'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Inject, Injectable } from '@nestjs/common'
import { Cache } from 'cache-manager'
import { generate } from 'otp-generator'
import * as bcrypt from 'bcrypt'
import { HelperService } from 'src/helper/helper.service'

interface DataField {
    user_id: any
    type_otp: string
    email: string
    phone_number: any
}

interface OtpObject {
    id: string
    user_id: string
    expired_at: number
    type_otp: string
    email: string
    value: string
}
export interface ResultOtp {
    valueOtp: string
    otpObject: OtpObject
}

@Injectable()
export class OtpService {
    constructor(
        @Inject(CACHE_MANAGER) private cacheService: Cache,
        private helper: HelperService,
    ) {}
    generateNewOtp = async (number: number, dataField: DataField): Promise<ResultOtp> => {
        // generate new otp document to verify user email
        // hash otp value
        // save otp value in cache
        let otpCode = generate(number, {
            upperCaseAlphabets: false,
            specialChars: false,
            lowerCaseAlphabets: false,
            digits: true,
        })
        const salt = await bcrypt.genSalt(10)
        const hashOtp = await bcrypt.hash(otpCode, salt)

        let otpObject = {
            id: this.helper.generateId(16),
            user_id: dataField.user_id,
            expired_at: Date.now() + 60 * 1000,
            type_otp: dataField.type_otp,
            email: dataField.email,
            value: hashOtp,
        }

        return {
            valueOtp: otpCode,
            otpObject: otpObject,
        }
    }

    verifyOtp = (): string => {
        return
    }
}
