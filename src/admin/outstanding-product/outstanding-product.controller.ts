import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OutstandingProductService } from './outstanding-product.service';
import { CreateOutstandingProductDto } from './dto/create-outstanding-product.dto';
import { UpdateOutstandingProductDto } from './dto/update-outstanding-product.dto';

@Controller('admin/outstanding-product')
export class OutstandingProductController {
  constructor(private readonly outstandingProductService: OutstandingProductService) {}

  @Post()
  create(@Body() createOutstandingProductDto: CreateOutstandingProductDto) {
    return this.outstandingProductService.create(createOutstandingProductDto);
  }

  @Get()
  findAll() {
    return this.outstandingProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.outstandingProductService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOutstandingProductDto: UpdateOutstandingProductDto) {
    return this.outstandingProductService.update(id, updateOutstandingProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.outstandingProductService.remove(id);
  }
}
