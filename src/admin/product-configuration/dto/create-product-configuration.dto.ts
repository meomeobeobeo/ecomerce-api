import { IsNotEmpty } from 'class-validator'

export class CreateProductConfigurationDto {
    @IsNotEmpty()
    product_item_id: string

    @IsNotEmpty()
    variation_option_id: string
}
