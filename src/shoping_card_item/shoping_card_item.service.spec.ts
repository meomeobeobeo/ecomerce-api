import { Test, TestingModule } from '@nestjs/testing';
import { ShopingCardItemService } from './shoping_card_item.service';

describe('ShopingCardItemService', () => {
  let service: ShopingCardItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShopingCardItemService],
    }).compile();

    service = module.get<ShopingCardItemService>(ShopingCardItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
