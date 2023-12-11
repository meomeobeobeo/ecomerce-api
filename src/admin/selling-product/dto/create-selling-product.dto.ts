import { IsNotEmpty } from "class-validator"

export class CreateSellingProductDto {
    @IsNotEmpty()
    product_item_id : string
   
}
