import { Injectable } from '@nestjs/common';
import { CreateShippingMethodDto } from './dto/create-shipping_method.dto';
import { UpdateShippingMethodDto } from './dto/update-shipping_method.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { HelperService } from 'src/helper/helper.service';

@Injectable()
export class ShippingMethodService {
  constructor(
    private prismaService: PrismaService,
    private helper: HelperService,
) {}
  async create(createShippingMethodDto: CreateShippingMethodDto) {
    try {

    
      const createdDocument = await this.prismaService.shipping_method.create({
        data : {
          id : this.helper.generateId(16),
          name : createShippingMethodDto.name,
          price : createShippingMethodDto.price
        }
      })
      return {
        statusCode: 201,
        message: 'created successfull',
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
    return `This action returns all shippingMethod`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shippingMethod`;
  }

  update(id: number, updateShippingMethodDto: UpdateShippingMethodDto) {
    return `This action updates a #${id} shippingMethod`;
  }

  remove(id: number) {
    return `This action removes a #${id} shippingMethod`;
  }
}
