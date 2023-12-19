import { IsNotEmpty } from "class-validator"

export class CreateShippingMethodDto {
    @IsNotEmpty()
    name : string
    @IsNotEmpty()
    price : string
}
