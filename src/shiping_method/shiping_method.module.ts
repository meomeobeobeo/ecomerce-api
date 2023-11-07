import { Module } from '@nestjs/common';
import { ShipingMethodService } from './shiping_method.service';
import { ShipingMethodController } from './shiping_method.controller';

@Module({
  controllers: [ShipingMethodController],
  providers: [ShipingMethodService],
})
export class ShipingMethodModule {}
