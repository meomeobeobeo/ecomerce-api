import { Injectable } from '@nestjs/common'
import { CreateProductConfigurationDto } from './dto/create-product-configuration.dto'
import { UpdateProductConfigurationDto } from './dto/update-product-configuration.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { HelperService } from 'src/helper/helper.service'

@Injectable()
export class ProductConfigurationService {
    constructor(
        private prismaService: PrismaService,
        private helper: HelperService,
    ) {}
    async create(createProductConfigurationDto: CreateProductConfigurationDto) {
        try {
            let dataCreated = await this.prismaService.product_configuration.create({
                data: {
                    id: this.helper.generateId(16),
                    ...createProductConfigurationDto,
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
            let dataReturn = await this.prismaService.product_configuration.findMany({})
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
            let dataReturn = await this.prismaService.product_configuration.findUnique({
                where: {
                    id: id,
                },
            })

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

    async update(id: string, updateProductConfigurationDto: UpdateProductConfigurationDto) {
        let dataReturn = await this.prismaService.product_configuration.update({
            where: {
                id: id,
            },
            data: updateProductConfigurationDto,
        })

        return {
            statusCode: 204,
            message: 'update data successfully',
            metaData: dataReturn,
        }
    }

    async remove(id: string) {
        try {
            let dataReturn = await this.prismaService.product_configuration.delete({
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
