import { Injectable } from '@nestjs/common';
import { CreateShipingMethodDto } from './dto/create-shiping_method.dto';
import { UpdateShipingMethodDto } from './dto/update-shiping_method.dto';

@Injectable()
export class ShipingMethodService {
  create(createShipingMethodDto: CreateShipingMethodDto) {
    return 'This action adds a new shipingMethod';
  }

  findAll() {
    return `This action returns all shipingMethod`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shipingMethod`;
  }

  update(id: number, updateShipingMethodDto: UpdateShipingMethodDto) {
    return `This action updates a #${id} shipingMethod`;
  }

  remove(id: number) {
    return `This action removes a #${id} shipingMethod`;
  }
}
