import { Injectable } from '@nestjs/common'
import { CreateProductItemDto } from './dto/create-product-item.dto'
import { UpdateProductItemDto } from './dto/update-product-item.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { HelperService } from 'src/helper/helper.service'

@Injectable()
export class ProductItemsService {
    constructor(
        private prismaService: PrismaService,
        private helper: HelperService,
    ) {}
    async create(createProductItemDto: CreateProductItemDto) {
        try {
            let dataCreated = await this.prismaService.product_item.create({
                data: {
                    id: this.helper.generateId(16),
                    ...createProductItemDto,
                },
            })

            return {
                statusCode: 201,
                message: 'data create successfully',
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

    async findAll() {
        try {
            let dataReturn = await this.prismaService.product_item.findMany({})
            return {
                statusCode: 200,
                message: 'data load successfully',
                metaData: dataReturn,
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

    async findOne(id: string) {
        try {
            let dataReturn = {}

            const productDetail = await this.prismaService.product_item.findUnique({
                where: {
                    id: id,
                },
                include: {
                    product_configuration: {
                        include: {
                            variation_option: {
                                include: {
                                    variation: true,
                                },
                            },
                        },
                    },
                },
            })

            // Group the product_configuration data by variation_id
            const groupedByVariationId = productDetail.product_configuration.reduce((acc, config) => {
                const variationId = config.variation_option.variation.id

                if (!acc[variationId]) {
                    acc[variationId] = {
                        variation_id: variationId,
                        variation_name: config.variation_option.variation.name,
                        configurations: [],
                    }
                }

                acc[variationId].configurations.push({
                    product_configuration_id: config.id,
                    variation_option_id: config.variation_option.id,
                    value: config.variation_option.value,
                })

                return acc
            }, {})

            // Shape the returned data
            const formattedProductDetail = {
                id: productDetail.id,
                product_id: productDetail.product_id,
                SKU: productDetail.SKU,
                qty_in_stock: productDetail.qty_in_stock,
                product_image: productDetail.product_image,
                price: productDetail.price,
                name: productDetail.name,
                createdAt: productDetail.createdAt,
                updatedAt: productDetail.updatedAt,
                rateValue: 5,
                variation_list: Object.values(groupedByVariationId),
            }

            return {
                statusCode: 200,
                message: 'data load successfully',
                metaData: formattedProductDetail,

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

    async update(id: string, updateProductItemDto: UpdateProductItemDto) {
        try {
            let dataReturn = await this.prismaService.product_item.update({
                where: {
                    id: id,
                },
                data: updateProductItemDto,
            })

            return {
                statusCode: 204,
                message: 'update data successfully',
                metaData: dataReturn,
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

    async remove(id: string) {
        try {
            let dataReturn = await this.prismaService.product_item.delete({
                where: {
                    id: id,
                },
            })

            return {
                statusCode: 205,
                message: 'data delete successfully',
                metaData: {},
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
}
