import { Injectable } from '@nestjs/common'
import { CreatePromotionCategoryDto } from './dto/create-promotion-category.dto'
import { UpdatePromotionCategoryDto } from './dto/update-promotion-category.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { HelperService } from 'src/helper/helper.service'

@Injectable()
export class PromotionCategoryService {
    constructor(
        private prismaService: PrismaService,
        private helper: HelperService,
    ) {}
    async create(createPromotionCategoryDto: CreatePromotionCategoryDto) {
        try {
            let dataCreated = await this.prismaService.promotion_category.create({
                data: {
                    category_id: createPromotionCategoryDto.category_id,
                    promotion_id: createPromotionCategoryDto.promotion_id,
                    // product_categoy : createPromotionCategoryDto.category_id,
                    // promotion : createPromotionCategoryDto.promotion_id
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
            let dataReturn = await this.prismaService.promotion_category.findMany({})
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
        // try {
        //     let dataReturn = await this.prismaService.promotion_category.findUnique({
        //         where: {
        //             id: id,
        //         },
        //     })
        //     return {
        //         statusCode: 200,
        //         message: 'data load successfully',
        //         metaData: dataReturn,
        //     }
        // } catch (error) {
        //     console.log(error)
        //     return {
        //         statusCode: 500,
        //         message: error?.message,
        //         metaData: '',
        //     }
        // }
    }

    async update(id: string, updatePromotionCategoryDto: UpdatePromotionCategoryDto) {
        // try {
        //     let dataReturn = await this.prismaService.promotion_category.update({
        //         where: {
        //             id: id,
        //         },
        //         data: updatePromotionCategoryDto,
        //     })
        //     return {
        //         statusCode: 204,
        //         message: 'update data successfully',
        //         metaData: dataReturn,
        //     }
        // } catch (error) {
        //     console.log(error)
        //     return {
        //         statusCode: 500,
        //         message: error?.message,
        //         metaData: '',
        //     }
        // }
    }

    async remove(id: string) {
        // try {
        //     let dataReturn = await this.prismaService.promotion_category.delete({
        //         where: {
        //             id: id,
        //         },
        //     })
        //     return {
        //         statusCode: 205,
        //         message: 'data delete successfully',
        //         metaData: {},
        //     }
        // } catch (error) {
        //     console.log(error)
        //     return {
        //         statusCode: 500,
        //         message: error?.message,
        //         metaData: '',
        //     }
        // }
    }
}
