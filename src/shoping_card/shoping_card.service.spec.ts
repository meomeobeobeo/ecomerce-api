import { Test, TestingModule } from '@nestjs/testing';
import { ShopingCardService } from './shoping_card.service';

describe('ShopingCardService', () => {
  let service: ShopingCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShopingCardService],
    }).compile();

    service = module.get<ShopingCardService>(ShopingCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
