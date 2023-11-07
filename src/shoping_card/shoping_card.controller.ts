import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShopingCardService } from './shoping_card.service';
import { CreateShopingCardDto } from './dto/create-shoping_card.dto';
import { UpdateShopingCardDto } from './dto/update-shoping_card.dto';

@Controller('shoping-card')
export class ShopingCardController {
  constructor(private readonly shopingCardService: ShopingCardService) {}

  @Post()
  create(@Body() createShopingCardDto: CreateShopingCardDto) {
    return this.shopingCardService.create(createShopingCardDto);
  }

  @Get()
  findAll() {
    return this.shopingCardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shopingCardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShopingCardDto: UpdateShopingCardDto) {
    return this.shopingCardService.update(+id, updateShopingCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shopingCardService.remove(+id);
  }
}
