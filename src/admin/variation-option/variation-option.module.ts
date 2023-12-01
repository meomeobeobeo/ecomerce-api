import { Module } from '@nestjs/common';
import { VariationOptionService } from './variation-option.service';
import { VariationOptionController } from './variation-option.controller';

@Module({
  controllers: [VariationOptionController],
  providers: [VariationOptionService],
})
export class VariationOptionModule {}
