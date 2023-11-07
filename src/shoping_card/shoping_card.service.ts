import { Injectable } from '@nestjs/common';
import { CreateShopingCardDto } from './dto/create-shoping_card.dto';
import { UpdateShopingCardDto } from './dto/update-shoping_card.dto';

@Injectable()
export class ShopingCardService {
  create(createShopingCardDto: CreateShopingCardDto) {
    return 'This action adds a new shopingCard';
  }

  findAll() {
    return `This action returns all shopingCard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shopingCard`;
  }

  update(id: number, updateShopingCardDto: UpdateShopingCardDto) {
    return `This action updates a #${id} shopingCard`;
  }

  remove(id: number) {
    return `This action removes a #${id} shopingCard`;
  }
}
