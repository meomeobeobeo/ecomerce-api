import { Body, Controller, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { CreateShoppingCartDto } from './dto/shoppingCartItemDto';
import { Request, Response } from 'express';
import { CreateShopOrderDto } from './dto/createShopOrderDto';

@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {
  }

  @UsePipes(new ValidationPipe())
  @Post('/createShoppingCartItem')
  async createShoppingCartItem(@Body() createShoppingCartItem : CreateShoppingCartDto , @Req() req : Request , @Res() res : Response ){

      let result = await this.purchaseService.create_shoppingCart_item(createShoppingCartItem)
      // result.then((data)=>{
      //   res.status(data.statusCode).json(data)
      // })
      res.status(result.statusCode).json(result)
      // return result
  }
  @UsePipes(new ValidationPipe())
  @Post('/purchaseShoppingCartItem')
  async purchaseShoppingCartItem(@Body() createShopOrderDto : CreateShopOrderDto , @Req() req : Request , @Res() res : Response){
    let result = await this.purchaseService.purchaseShoppingCartItem(createShopOrderDto)
    res.status(result.statusCode).json(result)
  }
  

}
