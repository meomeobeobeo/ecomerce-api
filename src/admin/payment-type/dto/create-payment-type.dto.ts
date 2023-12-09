import { IsNotEmpty } from 'class-validator'

export class CreatePaymentTypeDto {
    @IsNotEmpty()
    value: string
}
