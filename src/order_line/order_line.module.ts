import { Module } from '@nestjs/common';
import { OrderLineService } from './order_line.service';
import { OrderLineController } from './order_line.controller';

@Module({
  controllers: [OrderLineController],
  providers: [OrderLineService],
})
export class OrderLineModule {}
