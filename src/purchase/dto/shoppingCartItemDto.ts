import { IsNotEmpty } from 'class-validator'

export class CreateShoppingCartDto {
    @IsNotEmpty()
    user_id: string

    @IsNotEmpty()
    product_item_id: string

    @IsNotEmpty()
    product_configuration_id: string

    @IsNotEmpty()
    qty: string
    // quantity
}
