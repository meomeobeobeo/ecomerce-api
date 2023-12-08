import { Injectable } from '@nestjs/common'
import { CreatePromotionDto } from './dto/create-promotion.dto'
import { UpdatePromotionDto } from './dto/update-promotion.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { HelperService } from 'src/helper/helper.service'

@Injectable()
export class PromotionService {
    constructor(
        private prismaService: PrismaService,
        private helper: HelperService,
    ) {}
    async create(createPromotionDto: CreatePromotionDto) {
        try {
            let dataCreated = await this.prismaService.promotion.create({
                data: {
                    id: this.helper.generateId(16),
                    ...createPromotionDto,
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
            let dataReturn = await this.prismaService.promotion.findMany({})
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
            let dataReturn = await this.prismaService.promotion.findUnique({
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

    async update(id: string, updatePromotionDto: UpdatePromotionDto) {
        try {
            let dataReturn = await this.prismaService.promotion.update({
                where: {
                    id: id,
                },
                data: updatePromotionDto,
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
            let dataReturn = await this.prismaService.promotion.delete({
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
