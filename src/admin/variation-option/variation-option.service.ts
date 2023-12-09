import { Injectable } from '@nestjs/common'
import { CreateVariationOptionDto } from './dto/create-variation-option.dto'
import { UpdateVariationOptionDto } from './dto/update-variation-option.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { HelperService } from 'src/helper/helper.service'

@Injectable()
export class VariationOptionService {
    constructor(
        private prismaService: PrismaService,
        private helper: HelperService,
    ) {}
    async create(createVariationOptionDto: CreateVariationOptionDto) {
        try {
            let dataCreated = await this.prismaService.variation_option.create({
                data: {
                    id: this.helper.generateId(16),
                    ...createVariationOptionDto,
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
            let dataReturn = await this.prismaService.variation_option.findMany({})
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
            let dataReturn = await this.prismaService.variation_option.findUnique({
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

    async update(id: string, updateVariationOptionDto: UpdateVariationOptionDto) {
        try {
            let dataReturn = await this.prismaService.variation_option.update({
                where: {
                    id: id,
                },
                data: updateVariationOptionDto,
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
            let dataReturn = await this.prismaService.variation_option.delete({
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
