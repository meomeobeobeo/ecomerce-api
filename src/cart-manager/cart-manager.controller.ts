import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes } from '@nestjs/common';
import { CartManagerService } from './cart-manager.service';
import { CreateCartManagerDto } from './dto/create-cart-manager.dto';
import { UpdateCartManagerDto } from './dto/update-cart-manager.dto';
import { CreateShoppingCartDto } from './dto/shoppingCartItemDto';

@Controller('cart-manager')
export class CartManagerController {
  constructor(private readonly cartManagerService: CartManagerService) {}


  @UsePipes(new ValidationPipe())
  @Post('/create-shoppingCartItem')
  create(@Body() createShoppingCartItem: CreateShoppingCartDto) {
    return this.cartManagerService.create(createShoppingCartItem);
  }

  @Get('/listProductInCartWithUserId/:userId')
  findProductItemInCartWithUserId(@Param('userId') userId: string) {
    return this.cartManagerService.findProductItemInCartWithUserId(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartManagerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartManagerDto: UpdateCartManagerDto) {
    return this.cartManagerService.update(+id, updateCartManagerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartManagerService.remove(+id);
  }
}
