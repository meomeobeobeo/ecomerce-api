import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShipingMethodService } from './shiping_method.service';
import { CreateShipingMethodDto } from './dto/create-shiping_method.dto';
import { UpdateShipingMethodDto } from './dto/update-shiping_method.dto';

@Controller('shiping-method')
export class ShipingMethodController {
  constructor(private readonly shipingMethodService: ShipingMethodService) {}

  @Post()
  create(@Body() createShipingMethodDto: CreateShipingMethodDto) {
    return this.shipingMethodService.create(createShipingMethodDto);
  }

  @Get()
  findAll() {
    return this.shipingMethodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shipingMethodService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShipingMethodDto: UpdateShipingMethodDto) {
    return this.shipingMethodService.update(+id, updateShipingMethodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shipingMethodService.remove(+id);
  }
}
