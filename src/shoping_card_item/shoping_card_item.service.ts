import { Injectable } from '@nestjs/common';
import { CreateShopingCardItemDto } from './dto/create-shoping_card_item.dto';
import { UpdateShopingCardItemDto } from './dto/update-shoping_card_item.dto';

@Injectable()
export class ShopingCardItemService {
  create(createShopingCardItemDto: CreateShopingCardItemDto) {
    return 'This action adds a new shopingCardItem';
  }

  findAll() {
    return `This action returns all shopingCardItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shopingCardItem`;
  }

  update(id: number, updateShopingCardItemDto: UpdateShopingCardItemDto) {
    return `This action updates a #${id} shopingCardItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} shopingCardItem`;
  }
}
