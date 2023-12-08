import { IsNotEmpty } from 'class-validator'

export class CreateVariationOptionDto {
    @IsNotEmpty()
    variation_id: string

    @IsNotEmpty()
    value: string
}
