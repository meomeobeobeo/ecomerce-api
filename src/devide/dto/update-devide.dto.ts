import { PartialType } from '@nestjs/mapped-types';
import { CreateDevideDto } from './create-devide.dto';

export class UpdateDevideDto extends PartialType(CreateDevideDto) {}
