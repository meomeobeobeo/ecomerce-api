import { PartialType } from '@nestjs/mapped-types';
import { CreateSellingProductDto } from './create-selling-product.dto';

export class UpdateSellingProductDto extends PartialType(CreateSellingProductDto) {}
