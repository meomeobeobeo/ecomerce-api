import { IsNotEmpty } from 'class-validator'

export class CreatePromotionDto {
    @IsNotEmpty()
    name: string
    @IsNotEmpty()
    description: string
    @IsNotEmpty()
    discount_rate: string
    @IsNotEmpty()
    start_date: string
    @IsNotEmpty()
    end_date: string
}
