import { Test, TestingModule } from '@nestjs/testing';
import { SellingProductService } from './selling-product.service';

describe('SellingProductService', () => {
  let service: SellingProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SellingProductService],
    }).compile();

    service = module.get<SellingProductService>(SellingProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
