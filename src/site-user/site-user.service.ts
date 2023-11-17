import { Injectable } from '@nestjs/common';

@Injectable()
export class SiteUserService {
  async create() {
    
    return 'This action adds a new siteUser';
  }

  async findAll() {
    return `This action returns all siteUser`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} siteUser`;
  }

  async update(id: number) {
    return `This action updates a #${id} siteUser`;
  }

  async remove(id: number) {
    return `This action removes a #${id} siteUser`;
  }
}
