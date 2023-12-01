import { Injectable } from '@nestjs/common'
import { CreateCountryDto } from './dto/create-country.dto'
import { UpdateCountryDto } from './dto/update-country.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { HelperService } from 'src/helper/helper.service'

@Injectable()
export class CountryService {
    constructor(
        private prismaService: PrismaService,
        private helper: HelperService,
    ) {}
    async create(createCountryDto: CreateCountryDto) {
        try {
            let dataCreated = await this.prismaService.country.create({
                data: {
                    id: this.helper.generateId(16),
                    country_name: createCountryDto.country_name,
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
            let dataReturn = await this.prismaService.country.findMany({})

            return  {
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
            let dataReturn = await this.prismaService.country.findUnique({
                where : {
                    id : id
                }
            })

            return  {
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

    async update(id: string, updateCountryDto: UpdateCountryDto) {
        try {
            console.log(updateCountryDto)
            let dataReturn = await this.prismaService.country.update({
                where :{
                    id : id
                },
                data : updateCountryDto
            })

            return  {
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
            let dataReturn = await this.prismaService.country.delete({
                where : {
                    id : id
                }
            })

            return  {
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
