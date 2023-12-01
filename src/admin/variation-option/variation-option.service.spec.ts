import { Test, TestingModule } from '@nestjs/testing';
import { VariationOptionService } from './variation-option.service';

describe('VariationOptionService', () => {
  let service: VariationOptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VariationOptionService],
    }).compile();

    service = module.get<VariationOptionService>(VariationOptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
