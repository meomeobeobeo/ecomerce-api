import { Module } from '@nestjs/common';
import { ShopingCardService } from './shoping_card.service';
import { ShopingCardController } from './shoping_card.controller';

@Module({
  controllers: [ShopingCardController],
  providers: [ShopingCardService],
})
export class ShopingCardModule {}
