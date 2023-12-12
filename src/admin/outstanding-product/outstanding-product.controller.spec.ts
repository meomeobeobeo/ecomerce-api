import { Test, TestingModule } from '@nestjs/testing';
import { OutstandingProductController } from './outstanding-product.controller';
import { OutstandingProductService } from './outstanding-product.service';

describe('OutstandingProductController', () => {
  let controller: OutstandingProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OutstandingProductController],
      providers: [OutstandingProductService],
    }).compile();

    controller = module.get<OutstandingProductController>(OutstandingProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
