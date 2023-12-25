import { IsNotEmpty } from 'class-validator'

export class CreateUserPaymentMethodDto {
    @IsNotEmpty()
    user_id: string
    @IsNotEmpty()
    payment_type_id: string
    provider: string
    account_number: string
    expire_date: string
    is_default: string
    cvv : string
    cart_holder_name : string
}
