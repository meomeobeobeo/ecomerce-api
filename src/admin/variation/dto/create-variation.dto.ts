import { IsNotEmpty } from 'class-validator'

export class CreateVariationDto {
    @IsNotEmpty()
    category_id: string

    @IsNotEmpty()
    name: string
}
