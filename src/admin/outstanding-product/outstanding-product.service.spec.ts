import { Test, TestingModule } from '@nestjs/testing';
import { OutstandingProductService } from './outstanding-product.service';

describe('OutstandingProductService', () => {
  let service: OutstandingProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OutstandingProductService],
    }).compile();

    service = module.get<OutstandingProductService>(OutstandingProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
