import { Module } from '@nestjs/common';
import { CartManagerService } from './cart-manager.service';
import { CartManagerController } from './cart-manager.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CartItemsSchema } from './schema/cartItemSchema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'CartItems', schema: CartItemsSchema }])],
  controllers: [CartManagerController],
  providers: [CartManagerService],
})
export class CartManagerModule {}
