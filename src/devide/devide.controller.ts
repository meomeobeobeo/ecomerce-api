import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DevideService } from './devide.service';


@Controller('devide')
export class DevideController {
  constructor(private readonly devideService: DevideService) {}

  @Post()
  create() {
    
  }

  @Get()
  findAll() {
    return this.devideService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.devideService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
   
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.devideService.remove(+id);
  }
}
