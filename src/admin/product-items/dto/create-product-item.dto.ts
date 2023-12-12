import { IsNotEmpty } from 'class-validator'

export class CreateProductItemDto {
    @IsNotEmpty()
    product_id: string
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    SKU: string

    @IsNotEmpty()
    qty_in_stock: string

    @IsNotEmpty()
    product_image: string

    @IsNotEmpty()
    price: string
}
