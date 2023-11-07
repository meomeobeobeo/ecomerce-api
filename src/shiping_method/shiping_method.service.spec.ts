import { Test, TestingModule } from '@nestjs/testing';
import { ShipingMethodService } from './shiping_method.service';

describe('ShipingMethodService', () => {
  let service: ShipingMethodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShipingMethodService],
    }).compile();

    service = module.get<ShipingMethodService>(ShipingMethodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
