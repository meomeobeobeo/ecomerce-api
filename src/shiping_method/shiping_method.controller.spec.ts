import { Test, TestingModule } from '@nestjs/testing';
import { ShipingMethodController } from './shiping_method.controller';
import { ShipingMethodService } from './shiping_method.service';

describe('ShipingMethodController', () => {
  let controller: ShipingMethodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShipingMethodController],
      providers: [ShipingMethodService],
    }).compile();

    controller = module.get<ShipingMethodController>(ShipingMethodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
