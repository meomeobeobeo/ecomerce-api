import { IsNotEmpty } from "class-validator"

export class CreateCartManagerDto {
    @IsNotEmpty()
    id : string
    @IsNotEmpty()
    product_item_id: string
    @IsNotEmpty()
    cart_id : string
    @IsNotEmpty()
    qty: string 
    product_configuration_id_list: Array<string>
}
