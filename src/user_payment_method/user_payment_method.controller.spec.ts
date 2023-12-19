import { Test, TestingModule } from '@nestjs/testing';
import { UserPaymentMethodController } from './user_payment_method.controller';
import { UserPaymentMethodService } from './user_payment_method.service';

describe('UserPaymentMethodController', () => {
  let controller: UserPaymentMethodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserPaymentMethodController],
      providers: [UserPaymentMethodService],
    }).compile();

    controller = module.get<UserPaymentMethodController>(UserPaymentMethodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
