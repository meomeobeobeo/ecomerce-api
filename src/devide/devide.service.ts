import { Injectable } from '@nestjs/common';


@Injectable()
export class DevideService {
  create() {
    return 'This action adds a new devide';
  }

  findAll() {
    return `This action returns all devide`;
  }

  findOne(id: number) {
    return `This action returns a #${id} devide`;
  }

  update(id: number) {
    return `This action updates a #${id} devide`;
  }

  remove(id: number) {
    return `This action removes a #${id} devide`;
  }
}
