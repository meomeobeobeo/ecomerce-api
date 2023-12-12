import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { SellingProductService } from './selling-product.service';
import { SellingProductController } from './selling-product.controller';
import { SellingProductSchema } from './schema/sellingProduct.schema';

@Module({
  imports : [MongooseModule.forFeature([{name : 'SellingProduct' , schema : SellingProductSchema}])],
  controllers: [SellingProductController],
  providers: [SellingProductService],
})
export class SellingProductModule {}
