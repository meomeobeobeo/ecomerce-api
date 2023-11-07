import { PartialType } from '@nestjs/mapped-types';
import { CreateSiteUserDto } from './create-site-user.dto';

export class UpdateSiteUserDto extends PartialType(CreateSiteUserDto) {}
