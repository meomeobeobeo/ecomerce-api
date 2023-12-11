import { InjectModel } from '@nestjs/mongoose'
import { Injectable } from '@nestjs/common'
import { CreateOutstandingProductDto } from './dto/create-outstanding-product.dto'
import { UpdateOutstandingProductDto } from './dto/update-outstanding-product.dto'
import { OutstandingProduct } from './schema/outstandingProduct.schema'
import { Model } from 'mongoose'
import { PrismaService } from 'src/prisma/prisma.service'
@Injectable()
export class OutstandingProductService {
    constructor(
        @InjectModel(OutstandingProduct.name)
        private outstandingProductModel: Model<OutstandingProduct>,
        private prismaService: PrismaService,
    ) {}
    async create(createOutstandingProductDto: CreateOutstandingProductDto) {
        try {
            const res = await this.outstandingProductModel.create(createOutstandingProductDto)
            return {
                statusCode: 201,
                message: 'data create successfully',
                metaData: '',
            }
        } catch (error) {
            return {
                statusCode: 500,
                message: error?.message,
                metaData: '',
            }
        }
    }

    async findAll() {
        try {
            const outstandingProductList = await this.outstandingProductModel.find()

            // find product infomation from mysql database
            // return fomat data list

            return {
                statusCode: 201,
                message: 'data find successfully',
                metaData: outstandingProductList,
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
            // find product infomation from mysql database
            //return fomat data
            const findResult = await this.outstandingProductModel.findById(id)

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

    async update(id: string, updateOutstandingProductDto: UpdateOutstandingProductDto) {
        try {
            const res = await this.outstandingProductModel.findByIdAndUpdate(id, updateOutstandingProductDto, {
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
            const res = await this.outstandingProductModel.findByIdAndDelete(id)
            if (!res) {
                return {
                    statusCode: 404,
                    message: 'not font document to delete',
                    metaData: res,
                }
            }
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
