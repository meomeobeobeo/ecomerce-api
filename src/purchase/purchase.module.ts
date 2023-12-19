import { Module } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { PurchaseController } from './purchase.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderLine, OrderLineSchema } from './schema/order_line_schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'OrderLine', schema: OrderLineSchema }])],
  controllers: [PurchaseController],
  providers: [PurchaseService],
})
export class PurchaseModule {}
