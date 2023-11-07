import { Injectable } from '@nestjs/common';
import { CreateDevideDto } from './dto/create-devide.dto';
import { UpdateDevideDto } from './dto/update-devide.dto';

@Injectable()
export class DevideService {
  create(createDevideDto: CreateDevideDto) {
    return 'This action adds a new devide';
  }

  findAll() {
    return `This action returns all devide`;
  }

  findOne(id: number) {
    return `This action returns a #${id} devide`;
  }

  update(id: number, updateDevideDto: UpdateDevideDto) {
    return `This action updates a #${id} devide`;
  }

  remove(id: number) {
    return `This action removes a #${id} devide`;
  }
}
