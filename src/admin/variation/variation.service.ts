import { Injectable } from '@nestjs/common'
import { CreateVariationDto } from './dto/create-variation.dto'
import { UpdateVariationDto } from './dto/update-variation.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { HelperService } from 'src/helper/helper.service'

@Injectable()
export class VariationService {
    constructor(
        private prismaService: PrismaService,
        private helper: HelperService,
    ) {}
    async create(createVariationDto: CreateVariationDto) {
        try {
            let dataCreated = await this.prismaService.variation.create({
                data: {
                    id: this.helper.generateId(16),
                    ...createVariationDto,
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
            let dataReturn = await this.prismaService.variation.findMany({})
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
            let dataReturn = await this.prismaService.variation.findUnique({
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

    async update(id: string, updateVariationDto: UpdateVariationDto) {
        try {
            let dataReturn = await this.prismaService.variation.update({
                where: {
                    id: id,
                },
                data: updateVariationDto,
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
            let dataReturn = await this.prismaService.variation.delete({
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
