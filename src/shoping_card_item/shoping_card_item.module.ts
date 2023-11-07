import { Module } from '@nestjs/common';
import { ShopingCardItemService } from './shoping_card_item.service';
import { ShopingCardItemController } from './shoping_card_item.controller';

@Module({
  controllers: [ShopingCardItemController],
  providers: [ShopingCardItemService],
})
export class ShopingCardItemModule {}
