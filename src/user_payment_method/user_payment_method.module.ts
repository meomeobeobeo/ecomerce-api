import { Module } from '@nestjs/common';
import { UserPaymentMethodService } from './user_payment_method.service';
import { UserPaymentMethodController } from './user_payment_method.controller';

@Module({
  controllers: [UserPaymentMethodController],
  providers: [UserPaymentMethodService],
})
export class UserPaymentMethodModule {}
