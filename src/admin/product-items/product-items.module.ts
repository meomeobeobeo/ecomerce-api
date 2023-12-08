import { Module } from '@nestjs/common'
import { ProductItemsService } from './product-items.service'
import { ProductItemsController } from './product-items.controller'

@Module({
    controllers: [ProductItemsController],
    providers: [ProductItemsService],
})
export class ProductItemsModule {}
