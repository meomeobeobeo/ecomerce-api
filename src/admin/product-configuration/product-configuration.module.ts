import { Module } from '@nestjs/common';
import { ProductConfigurationService } from './product-configuration.service';
import { ProductConfigurationController } from './product-configuration.controller';

@Module({
  controllers: [ProductConfigurationController],
  providers: [ProductConfigurationService],
})
export class ProductConfigurationModule {}
