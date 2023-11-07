import { Test, TestingModule } from '@nestjs/testing';
import { ShopingCardItemController } from './shoping_card_item.controller';
import { ShopingCardItemService } from './shoping_card_item.service';

describe('ShopingCardItemController', () => {
  let controller: ShopingCardItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShopingCardItemController],
      providers: [ShopingCardItemService],
    }).compile();

    controller = module.get<ShopingCardItemController>(ShopingCardItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
