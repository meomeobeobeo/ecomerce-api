import { Test, TestingModule } from '@nestjs/testing';
import { ProductConfigurationController } from './product-configuration.controller';
import { ProductConfigurationService } from './product-configuration.service';

describe('ProductConfigurationController', () => {
  let controller: ProductConfigurationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductConfigurationController],
      providers: [ProductConfigurationService],
    }).compile();

    controller = module.get<ProductConfigurationController>(ProductConfigurationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
