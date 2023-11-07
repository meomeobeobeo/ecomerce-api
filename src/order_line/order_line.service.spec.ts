import { Test, TestingModule } from '@nestjs/testing';
import { OrderLineService } from './order_line.service';

describe('OrderLineService', () => {
  let service: OrderLineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderLineService],
    }).compile();

    service = module.get<OrderLineService>(OrderLineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
