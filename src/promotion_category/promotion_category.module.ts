import { Module } from '@nestjs/common';
import { PromotionCategoryService } from './promotion_category.service';
import { PromotionCategoryController } from './promotion_category.controller';

@Module({
  controllers: [PromotionCategoryController],
  providers: [PromotionCategoryService],
})
export class PromotionCategoryModule {}
