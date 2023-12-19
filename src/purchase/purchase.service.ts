import { CreateShopOrderDto } from './dto/createShopOrderDto';
import { Injectable } from '@nestjs/common'
import { HelperService } from 'src/helper/helper.service'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateShoppingCartDto } from './dto/shoppingCartItemDto'
import { InjectModel } from '@nestjs/mongoose';
import { OrderLine } from './schema/order_line_schema';
import { Model } from 'mongoose';

@Injectable()
export class PurchaseService {
    constructor(
        @InjectModel(OrderLine.name)
        private orderLineModel: Model<OrderLine>,
        private prismaService: PrismaService,
        private helper : HelperService
    ) {}

    async create_shoppingCart_item(createShoppingCartItem: CreateShoppingCartDto) {
        try {
            let shopping_cart = null
            const existed_shopping_cart = await this.prismaService.shoping_cart.findFirst({
                where: {
                    user_id: createShoppingCartItem.user_id,
                },
            })
            if (!existed_shopping_cart) {
                shopping_cart = await this.prismaService.shoping_cart.create({
                    data: {
                        id: this.helper.generateId(16),
                        user_id: createShoppingCartItem.user_id,
                    },
                })
            } else {
                shopping_cart = existed_shopping_cart
            }

            let shoping_cart_itemCreated = await this.prismaService.shoping_cart_item.create({
                data: {
                    id: this.helper.generateId(16),
                    cart_id: shopping_cart.id,
                    product_configuration_id: createShoppingCartItem.product_configuration_id,
                    product_item_id: createShoppingCartItem.product_item_id,
                    qty: createShoppingCartItem.qty,
                },
            })
            return {
                statusCode: 201,
                message: 'create successfully.',
                metaData: '',
            }
        } catch (error) {
            console.log(error)
            return {
                statusCode: 500,
                message: error?.message,
                metaData: '',
            }
        }
    }

    async purchaseShoppingCartItem(createShopOrderDto : CreateShopOrderDto) {
        try {
            // verify user
            // create shop order 
            // after create shop order , create order line 
            const shop_order = await this.prismaService.shop_order.create({
                data : {
                    id : this.helper.generateId(16),
                    user_id : createShopOrderDto.user_id,
                    order_date : createShopOrderDto.order_date,
                    payment_method_id : createShopOrderDto.payment_method_id,
                    shipping_address_id : createShopOrderDto.shipping_address_id,
                    shipping_method_id : createShopOrderDto.shipping_method_id,
                    order_total : createShopOrderDto.order_total,
                    order_status : createShopOrderDto.order_status
                }
            })

            // create order line

            const created_order_line = await this.orderLineModel.create({
                id : this.helper.generateId(16),
                product_item_id : createShopOrderDto.product_item_id,
                order_id : shop_order.id,
                qty : createShopOrderDto.qty,
                total_price : parseFloat(createShopOrderDto.price) * parseFloat(createShopOrderDto.qty),
                product_configuration_id_list : createShopOrderDto.product_configuration_id_list || []
            })
            
            return {
                statusCode: 201,
                message: 'create successfully.',
                metaData: created_order_line,
            }

        } catch (error) {
            return {
                statusCode: 500,
                message: error?.message,
                metaData: '',
            }
        }
    }
}
