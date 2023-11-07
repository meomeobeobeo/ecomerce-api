import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SiteUserModule } from './site-user/site-user.module';
import { AuthModule } from './auth/auth.module';
import { UserAddressModule } from './user_address/user_address.module';
import { AddressModule } from './address/address.module';
import { CountryModule } from './country/country.module';
import { DevideModule } from './devide/devide.module';
import { UserReviewModule } from './user_review/user_review.module';
import { UserPaymentMethodModule } from './user_payment_method/user_payment_method.module';
import { ShopingCardModule } from './shoping_card/shoping_card.module';
import { ShopingCardItemModule } from './shoping_card_item/shoping_card_item.module';
import { PromotionModule } from './promotion/promotion.module';
import { PromotionCategoryModule } from './promotion_category/promotion_category.module';
import { ProductCategoryModule } from './product_category/product_category.module';
import { ProductModule } from './product/product.module';
import { VariationModule } from './variation/variation.module';
import { ProductItemModule } from './product_item/product_item.module';
import { VariationOptionModule } from './variation_option/variation_option.module';
import { ProductConfigurationModule } from './product_configuration/product_configuration.module';
import { ShopOrderModule } from './shop_order/shop_order.module';
import { ShipingMethodModule } from './shiping_method/shiping_method.module';
import { OrderStatusModule } from './order_status/order_status.module';
import { OrderLineModule } from './order_line/order_line.module';




@Module({
  imports: [ SiteUserModule, AuthModule, UserAddressModule, AddressModule, CountryModule, DevideModule, UserReviewModule, UserPaymentMethodModule, ShopingCardModule, ShopingCardItemModule, PromotionModule, PromotionCategoryModule, ProductCategoryModule, ProductModule, VariationModule, ProductItemModule, VariationOptionModule, ProductConfigurationModule, ShopOrderModule, ShipingMethodModule, OrderStatusModule, OrderLineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
