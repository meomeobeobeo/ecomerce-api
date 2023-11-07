import { PartialType } from '@nestjs/mapped-types';
import { CreateShopingCardItemDto } from './create-shoping_card_item.dto';

export class UpdateShopingCardItemDto extends PartialType(CreateShopingCardItemDto) {}
