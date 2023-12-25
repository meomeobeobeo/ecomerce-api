import { Test, TestingModule } from '@nestjs/testing';
import { CartManagerController } from './cart-manager.controller';
import { CartManagerService } from './cart-manager.service';

describe('CartManagerController', () => {
  let controller: CartManagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartManagerController],
      providers: [CartManagerService],
    }).compile();

    controller = module.get<CartManagerController>(CartManagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
