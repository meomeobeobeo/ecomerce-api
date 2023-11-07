import { Test, TestingModule } from '@nestjs/testing';
import { ShopingCardController } from './shoping_card.controller';
import { ShopingCardService } from './shoping_card.service';

describe('ShopingCardController', () => {
  let controller: ShopingCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShopingCardController],
      providers: [ShopingCardService],
    }).compile();

    controller = module.get<ShopingCardController>(ShopingCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
