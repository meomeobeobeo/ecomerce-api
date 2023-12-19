import { IsNotEmpty } from "class-validator"

export class CreateAddressDto {
    unit_number : string
    street_number : string
    address_line1 : string
    address_line2 : string
    city : string
    region : string
    postal_code : string
    @IsNotEmpty()
    country_id : string

}
