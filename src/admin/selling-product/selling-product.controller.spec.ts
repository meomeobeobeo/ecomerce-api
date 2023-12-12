import { Test, TestingModule } from '@nestjs/testing';
import { SellingProductController } from './selling-product.controller';
import { SellingProductService } from './selling-product.service';

describe('SellingProductController', () => {
  let controller: SellingProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SellingProductController],
      providers: [SellingProductService],
    }).compile();

    controller = module.get<SellingProductController>(SellingProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
