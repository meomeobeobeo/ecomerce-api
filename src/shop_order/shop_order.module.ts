import { Module } from '@nestjs/common';
import { ShopOrderService } from './shop_order.service';
import { ShopOrderController } from './shop_order.controller';

@Module({
  controllers: [ShopOrderController],
  providers: [ShopOrderService],
})
export class ShopOrderModule {}
