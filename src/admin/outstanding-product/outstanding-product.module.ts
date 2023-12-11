import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common'
import { OutstandingProductService } from './outstanding-product.service'
import { OutstandingProductController } from './outstanding-product.controller'
import { OutstandingProductSchema } from './schema/outstandingProduct.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'OutstandingProduct', schema: OutstandingProductSchema }])],
    controllers: [OutstandingProductController],
    providers: [OutstandingProductService],
})
export class OutstandingProductModule {}
