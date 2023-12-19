import { Injectable } from '@nestjs/common'
import { CreateSellingProductDto } from './dto/create-selling-product.dto'
import { UpdateSellingProductDto } from './dto/update-selling-product.dto'
import { InjectModel } from '@nestjs/mongoose'
import { SellingProduct } from './schema/sellingProduct.schema'
import * as mongoose from 'mongoose'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class SellingProductService {
    constructor(
        @InjectModel(SellingProduct.name)
        private sellingProductModel: mongoose.Model<SellingProduct>,
        private prismaService: PrismaService,
    ) {}

    async create(createSellingProductDto: CreateSellingProductDto) {
        try {
            const res = await this.sellingProductModel.create(createSellingProductDto)
            return {
                statusCode: 201,
                message: 'data create successfully',
                metaData: '',
            }
        } catch (error) {}
    }

    async findAll() {
        try {
            const sellingProductList = await this.sellingProductModel.find()

            // Use Promise.all to wait for all asynchronous operations to complete
            const returnData = await Promise.all(
                sellingProductList.map(async (data) => {
                    const productItemData = await this.prismaService.product_item.findUnique({
                        where: { id: data.product_item_id },
                    })

                  

                    return {
                        ...productItemData,
                        rateValue : 5
                    }
                }),
            )

            return {
                statusCode: 201,
                message: 'Data fetched successfully',
                metaData: returnData,
            }
        } catch (error) {
            return {
                statusCode: 500,
                message: error?.message,
                metaData: '',
            }
        }
    }

    async findById(id: string) {
        try {
            const findResult = await this.sellingProductModel.findById(id)

            return {
                statusCode: 201,
                message: 'data find successfully',
                metaData: findResult,
            }
        } catch (error) {
            return {
                statusCode: 500,
                message: error?.message,
                metaData: '',
            }
        }
    }

    async update(id: string, updateSellingProductDto: UpdateSellingProductDto) {
        try {
            const res = await this.sellingProductModel.findByIdAndUpdate(id, updateSellingProductDto, {
                new: true,
                runValidators: true,
            })
            if (!res) {
                return {
                    statusCode: 404,
                    message: 'not font document to update',
                    metaData: res,
                }
            }

            return {
                statusCode: 201,
                message: 'data update successfully',
                metaData: res,
            }
        } catch (error) {
            return {
                statusCode: 500,
                message: error?.message,
                metaData: '',
            }
        }
    }

    async remove(id: string) {
        try {
            const res = await this.sellingProductModel.findByIdAndDelete(id)
            return {
                statusCode: 201,
                message: 'data delete successfully',
                metaData: res,
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
