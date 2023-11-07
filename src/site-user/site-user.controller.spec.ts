import { Test, TestingModule } from '@nestjs/testing';
import { SiteUserController } from './site-user.controller';
import { SiteUserService } from './site-user.service';

describe('SiteUserController', () => {
  let controller: SiteUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SiteUserController],
      providers: [SiteUserService],
    }).compile();

    controller = module.get<SiteUserController>(SiteUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
