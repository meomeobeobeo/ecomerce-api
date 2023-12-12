import { PartialType } from '@nestjs/mapped-types';
import { CreateOutstandingProductDto } from './create-outstanding-product.dto';

export class UpdateOutstandingProductDto extends PartialType(CreateOutstandingProductDto) {}
