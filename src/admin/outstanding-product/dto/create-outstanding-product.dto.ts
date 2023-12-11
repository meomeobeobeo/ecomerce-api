import { IsNotEmpty } from "class-validator"

export class CreateOutstandingProductDto {
    @IsNotEmpty()
    product_item_id : string
    
}
