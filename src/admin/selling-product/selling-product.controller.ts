import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SellingProductService } from './selling-product.service';
import { CreateSellingProductDto } from './dto/create-selling-product.dto';
import { UpdateSellingProductDto } from './dto/update-selling-product.dto';

@Controller('admin/selling-product')
export class SellingProductController {
  constructor(private readonly sellingProductService: SellingProductService) {}

  @Post()
  create(@Body() createSellingProductDto: CreateSellingProductDto) {
    return this.sellingProductService.create(createSellingProductDto);
  }

  @Get()
  findAll() {
    return this.sellingProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellingProductService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSellingProductDto: UpdateSellingProductDto) {
    return this.sellingProductService.update(id, updateSellingProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellingProductService.remove(id);
  }
}
