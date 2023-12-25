import { Injectable } from '@nestjs/common'
import { CreateCartManagerDto } from './dto/create-cart-manager.dto'
import { UpdateCartManagerDto } from './dto/update-cart-manager.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { HelperService } from 'src/helper/helper.service'
import { CreateShoppingCartDto } from 'src/cart-manager/dto/shoppingCartItemDto'
import { CartItems } from './schema/cartItemSchema'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class CartManagerService {
    constructor(
        @InjectModel(CartItems.name)
        private cartItemsModel: Model<CartItems>,
        private prismaService: PrismaService,
        private helper: HelperService,
    ) {}
    async create(createShoppingCartItem: CreateShoppingCartDto) {
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

            // let shoping_cart_itemCreated = await this.prismaService.shoping_cart_item.create({
            //     data: {
            //         id: this.helper.generateId(16),
            //         cart_id: shopping_cart.id,
            //         product_configuration_id: createShoppingCartItem.product_configuration_id,
            //         product_item_id: createShoppingCartItem.product_item_id,
            //         qty: createShoppingCartItem.qty,
            //     },
            // })
            const created_cart_item = await this.cartItemsModel.create({
                id: this.helper.generateId(16),
                product_configuration_id_list: createShoppingCartItem.product_configuration_id_list,
                cart_id: shopping_cart.id,
                product_item_id: createShoppingCartItem.product_item_id,
                qty: createShoppingCartItem.qty,
            })
            return {
                statusCode: 201,
                message: 'create successfully.',
                metaData: created_cart_item,
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

    async findProductItemInCartWithUserId(userId: string) {
        try {
            const cartInforUser = await this.prismaService.shoping_cart.findUnique({
                where: {
                    user_id: userId,
                },
            })
            if (!cartInforUser) {
                return {
                    statusCode: 202,
                    message: 'Cart empty',
                    metaData: [],
                }
            }
            const cart_id = cartInforUser.id

            // list product items in cart
        } catch (error) {
            console.log(error)
            return {
                statusCode: 500,
                message: error?.message,
                metaData: '',
            }
        }
    }

    findOne(id: number) {
        return `This action returns a #${id} cartManager`
    }

    update(id: number, updateCartManagerDto: UpdateCartManagerDto) {
        return `This action updates a #${id} cartManager`
    }

    remove(id: number) {
        return `This action removes a #${id} cartManager`
    }
}
