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
            let account_number_encrypt = null
            let cvv_encrypt = null
            if (createUserPaymentMethodDto.account_number) {
                account_number_encrypt = this.helper.encryptAes(
                    createUserPaymentMethodDto.account_number,
                    process.env.KEY_AES_ENCRYPT,
                )
            }
            if (createUserPaymentMethodDto.cvv) {
                cvv_encrypt = this.helper.encryptAes(createUserPaymentMethodDto.cvv, process.env.KEY_AES_ENCRYPT)
            }

            const createdDocument = await this.prismaService.user_payment_method.create({
                data: {
                    id: this.helper.generateId(16),
                    user_id: createUserPaymentMethodDto.user_id,
                    is_default: false,
                    payment_type_id: createUserPaymentMethodDto.payment_type_id,
                    account_number: account_number_encrypt,
                    provider: createUserPaymentMethodDto.provider || null,
                    expire_date: createUserPaymentMethodDto.expire_date || null,
                    cvv: cvv_encrypt,
                    cart_holder_name: createUserPaymentMethodDto.cart_holder_name,
                },
            })
            delete createdDocument.cvv
            delete createdDocument.account_number
            return {
                statusCode: 201,
                message: 'create user payment method successfully.',
                metaData: {
                    ...createdDocument,
                    account_number: `**** **** **** ${createUserPaymentMethodDto.account_number.slice(-4)}`,
                },
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

    async getListUserPaymentMethodWithUserId(userId: string) {
        try {
            let listPaymentMethodData = await this.prismaService.user_payment_method.findMany({
                where: {
                    user_id: userId,
                },
                include: {
                    payment_type: true,
                },
            })

            let fomatData = listPaymentMethodData.map((value, index) => {
                if (value.account_number) {
                    let decryptAccountNumber = this.helper.decryptAes(value.account_number, process.env.KEY_AES_ENCRYPT)
                    let paymentTypeName = value.payment_type.value
                    delete value.payment_type
                    delete value.cvv

                    let fomatReturnData = {
                        ...value,
                        account_number: `**** **** **** ${decryptAccountNumber.slice(-4)}`,
                        payment_type_name: paymentTypeName,
                    }

                    return fomatReturnData
                } else
                    return {
                        ...value,
                    }
            })
            return {
                statusCode: 200,
                message: 'return data successfully.',
                metaData: fomatData,
            }
        } catch (error) {
            return {
                statusCode: 500,
                message: error?.message,
                metaData: '',
            }
        }
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
