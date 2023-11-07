import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShopingCardItemService } from './shoping_card_item.service';
import { CreateShopingCardItemDto } from './dto/create-shoping_card_item.dto';
import { UpdateShopingCardItemDto } from './dto/update-shoping_card_item.dto';

@Controller('shoping-card-item')
export class ShopingCardItemController {
  constructor(private readonly shopingCardItemService: ShopingCardItemService) {}

  @Post()
  create(@Body() createShopingCardItemDto: CreateShopingCardItemDto) {
    return this.shopingCardItemService.create(createShopingCardItemDto);
  }

  @Get()
  findAll() {
    return this.shopingCardItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shopingCardItemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShopingCardItemDto: UpdateShopingCardItemDto) {
    return this.shopingCardItemService.update(+id, updateShopingCardItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shopingCardItemService.remove(+id);
  }
}
