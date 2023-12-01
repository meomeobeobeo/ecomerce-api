import { PartialType } from '@nestjs/mapped-types';
import { CreateProductConfigurationDto } from './create-product-configuration.dto';

export class UpdateProductConfigurationDto extends PartialType(CreateProductConfigurationDto) {}
