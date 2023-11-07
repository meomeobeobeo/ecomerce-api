import { Injectable } from '@nestjs/common';
import { CreateUserPaymentMethodDto } from './dto/create-user_payment_method.dto';
import { UpdateUserPaymentMethodDto } from './dto/update-user_payment_method.dto';

@Injectable()
export class UserPaymentMethodService {
  create(createUserPaymentMethodDto: CreateUserPaymentMethodDto) {
    return 'This action adds a new userPaymentMethod';
  }

  findAll() {
    return `This action returns all userPaymentMethod`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userPaymentMethod`;
  }

  update(id: number, updateUserPaymentMethodDto: UpdateUserPaymentMethodDto) {
    return `This action updates a #${id} userPaymentMethod`;
  }

  remove(id: number) {
    return `This action removes a #${id} userPaymentMethod`;
  }
}
