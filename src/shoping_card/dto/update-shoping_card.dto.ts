import { PartialType } from '@nestjs/mapped-types';
import { CreateShopingCardDto } from './create-shoping_card.dto';

export class UpdateShopingCardDto extends PartialType(CreateShopingCardDto) {}
