import { PartialType } from '@nestjs/mapped-types';
import { CreateShipingMethodDto } from './create-shiping_method.dto';

export class UpdateShipingMethodDto extends PartialType(CreateShipingMethodDto) {}
