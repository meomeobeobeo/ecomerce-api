import { IsNotEmpty } from 'class-validator'

export class CreatePromotionCategoryDto {
    @IsNotEmpty()
    category_id: string
    @IsNotEmpty()
    promotion_id: string
}
