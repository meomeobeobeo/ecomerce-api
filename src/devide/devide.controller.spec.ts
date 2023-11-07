import { Test, TestingModule } from '@nestjs/testing';
import { DevideController } from './devide.controller';
import { DevideService } from './devide.service';

describe('DevideController', () => {
  let controller: DevideController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DevideController],
      providers: [DevideService],
    }).compile();

    controller = module.get<DevideController>(DevideController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
