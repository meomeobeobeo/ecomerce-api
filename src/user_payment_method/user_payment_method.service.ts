import { Injectable } from '@nestjs/common'
import { CreateUserPaymentMethodDto } from './dto/create-user_payment_method.dto'
import { UpdateUserPaymentMethodDto } from './dto/update-user_payment_method.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { HelperService } from 'src/helper/helper.service'

@Injectable()
export class UserPaymentMethodService {
  constructor(
    private prismaService: PrismaService,
    private helper: HelperService,
) {}
    async create(createUserPaymentMethodDto: CreateUserPaymentMethodDto) {
        try {

          const createdDocument = await this.prismaService.user_payment_method.create({
            data : {
              
              id : this.helper.generateId(16),
              user_id : createUserPaymentMethodDto.user_id,
              is_default : false,
              payment_type_id : createUserPaymentMethodDto.payment_type_id,
              account_number : createUserPaymentMethodDto.account_number || null,
              provider : createUserPaymentMethodDto.provider || null,
              expire_date : createUserPaymentMethodDto.expire_date || null,
              
              
            }
          })
          return {
            statusCode: 201,
            message: 'create user payment method successfully.',
            metaData: createdDocument,
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

    findAll() {
        return `This action returns all userPaymentMethod`
    }

    findOne(id: number) {
        return `This action returns a #${id} userPaymentMethod`
    }

    update(id: number, updateUserPaymentMethodDto: UpdateUserPaymentMethodDto) {
        return `This action updates a #${id} userPaymentMethod`
    }

    remove(id: number) {
        return `This action removes a #${id} userPaymentMethod`
    }
}
