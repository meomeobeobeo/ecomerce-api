import { Injectable } from '@nestjs/common'
import { CreateAddressDto } from './dto/create-address.dto'
import { UpdateAddressDto } from './dto/update-address.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { HelperService } from 'src/helper/helper.service'

@Injectable()
export class AddressService {
    constructor(
        private prismaService: PrismaService,
        private helper: HelperService,
    ) {}
    async create(createAddressDto: CreateAddressDto) {
        try {
            const dataCreated = await this.prismaService.address.create({
                data: {
                    id: this.helper.generateId(16),
                    ...createAddressDto,
                },
            })
            return {
                statusCode: 201,
                message: 'create successfully.',
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

    findAll() {
        return `This action returns all address`
    }

    findOne(id: number) {
        return `This action returns a #${id} address`
    }

    update(id: number, updateAddressDto: UpdateAddressDto) {
        return `This action updates a #${id} address`
    }

    remove(id: number) {
        return `This action removes a #${id} address`
    }
}
