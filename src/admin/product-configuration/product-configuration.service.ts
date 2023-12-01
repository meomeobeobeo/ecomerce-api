import { Injectable } from '@nestjs/common';
import { CreateProductConfigurationDto } from './dto/create-product-configuration.dto';
import { UpdateProductConfigurationDto } from './dto/update-product-configuration.dto';

@Injectable()
export class ProductConfigurationService {
  create(createProductConfigurationDto: CreateProductConfigurationDto) {
    return 'This action adds a new productConfiguration';
  }

  findAll() {
    return `This action returns all productConfiguration`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productConfiguration`;
  }

  update(id: number, updateProductConfigurationDto: UpdateProductConfigurationDto) {
    return `This action updates a #${id} productConfiguration`;
  }

  remove(id: number) {
    return `This action removes a #${id} productConfiguration`;
  }
}
