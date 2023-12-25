import { PartialType } from '@nestjs/mapped-types';
import { CreateCartManagerDto } from './create-cart-manager.dto';

export class UpdateCartManagerDto extends PartialType(CreateCartManagerDto) {}
