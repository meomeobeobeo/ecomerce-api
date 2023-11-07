import { PartialType } from '@nestjs/mapped-types';
import { CreateUserPaymentMethodDto } from './create-user_payment_method.dto';

export class UpdateUserPaymentMethodDto extends PartialType(CreateUserPaymentMethodDto) {}
