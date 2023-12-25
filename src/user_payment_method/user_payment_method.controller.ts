import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserPaymentMethodService } from './user_payment_method.service';
import { CreateUserPaymentMethodDto } from './dto/create-user_payment_method.dto';
import { UpdateUserPaymentMethodDto } from './dto/update-user_payment_method.dto';

@Controller('user-payment-method')
export class UserPaymentMethodController {
  constructor(private readonly userPaymentMethodService: UserPaymentMethodService) {}

  @Post()
  create(@Body() createUserPaymentMethodDto: CreateUserPaymentMethodDto) {
    return this.userPaymentMethodService.create(createUserPaymentMethodDto);
  }

  @Get('/foruser/:userId')
  getListUserPaymentMethodWithUserId(@Param('userId') userId : string) {
    return this.userPaymentMethodService.getListUserPaymentMethodWithUserId(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userPaymentMethodService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserPaymentMethodDto: UpdateUserPaymentMethodDto) {
    return this.userPaymentMethodService.update(+id, updateUserPaymentMethodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userPaymentMethodService.remove(+id);
  }
}
