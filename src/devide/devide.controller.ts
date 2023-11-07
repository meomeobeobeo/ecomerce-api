import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DevideService } from './devide.service';
import { CreateDevideDto } from './dto/create-devide.dto';
import { UpdateDevideDto } from './dto/update-devide.dto';

@Controller('devide')
export class DevideController {
  constructor(private readonly devideService: DevideService) {}

  @Post()
  create(@Body() createDevideDto: CreateDevideDto) {
    return this.devideService.create(createDevideDto);
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
  update(@Param('id') id: string, @Body() updateDevideDto: UpdateDevideDto) {
    return this.devideService.update(+id, updateDevideDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.devideService.remove(+id);
  }
}
