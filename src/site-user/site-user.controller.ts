import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SiteUserService } from './site-user.service';
import { CreateSiteUserDto } from './dto/create-site-user.dto';
import { UpdateSiteUserDto } from './dto/update-site-user.dto';

@Controller('site-user')
export class SiteUserController {
  constructor(private readonly siteUserService: SiteUserService) {}

  @Post()
  create(@Body() createSiteUserDto: CreateSiteUserDto) {
    return this.siteUserService.create(createSiteUserDto);
  }

  @Get()
  findAll() {
    return this.siteUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.siteUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSiteUserDto: UpdateSiteUserDto) {
    return this.siteUserService.update(+id, updateSiteUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.siteUserService.remove(+id);
  }
}
