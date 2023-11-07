import { Injectable } from '@nestjs/common';
import { CreateSiteUserDto } from './dto/create-site-user.dto';
import { UpdateSiteUserDto } from './dto/update-site-user.dto';

@Injectable()
export class SiteUserService {
  create(createSiteUserDto: CreateSiteUserDto) {
    return 'This action adds a new siteUser';
  }

  findAll() {
    return `This action returns all siteUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} siteUser`;
  }

  update(id: number, updateSiteUserDto: UpdateSiteUserDto) {
    return `This action updates a #${id} siteUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} siteUser`;
  }
}
