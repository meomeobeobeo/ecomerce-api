import { IsNotEmpty } from 'class-validator'

export class CreateShopOrderDto {
    @IsNotEmpty()
    user_id: string

    @IsNotEmpty()
    order_date: string

    @IsNotEmpty()
    payment_method_id: string

    @IsNotEmpty()
    shipping_address_id: string

    @IsNotEmpty()
    shipping_method_id: string

    @IsNotEmpty()
    order_total: string

    @IsNotEmpty()
    order_status: string
    @IsNotEmpty()
    product_item_id : string
    @IsNotEmpty()
    qty : string
    @IsNotEmpty()
    price : string
    @IsNotEmpty()
    product_configuration_id_list : Array<string>

}
