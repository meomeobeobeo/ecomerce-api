import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SiteUserModule } from './site-user/site-user.module'
import { AuthModule } from './auth/auth.module'
import { UserAddressModule } from './user_address/user_address.module'
import { TestModule } from './test/test.module'
import { PrismaModule } from './prisma/prisma.module'
import { HelperService } from './helper/helper.service'
import { HelperModule } from './helper/helper.module'
import { OtpModule } from './otp/otp.module'
import { RedisManagerModule } from './redis-manager/redis-manager.module'
import { ConfigModule } from '@nestjs/config'
import { CacheModule } from '@nestjs/cache-manager'
import { CountryModule } from './admin/country/country.module';
import { VariationOptionModule } from './admin/variation-option/variation-option.module';
import { VariationModule } from './admin/variation/variation.module';
import { PromotionCategoryModule } from './admin/promotion-category/promotion-category.module';
import { PromotionModule } from './admin/promotion/promotion.module';
import { ProductItemsModule } from './admin/product-items/product-items.module';
import { ProductConfigurationModule } from './admin/product-configuration/product-configuration.module';
import { ProductModule } from './admin/product/product.module';
import { ProductCategoryModule } from './admin/product-category/product-category.module';
import { PaymentTypeModule } from './admin/payment-type/payment-type.module';
import * as redisStore from 'cache-manager-redis-store'
@Module({
    imports: [
        CacheModule.register({
            isGlobal: true,
            store: redisStore,
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
            ttl: 60,
        }),
        SiteUserModule,
        AuthModule,
        UserAddressModule,
        TestModule,
        TestModule,
        PrismaModule,
        HelperModule,
        OtpModule,
        RedisManagerModule,
        CountryModule,
        PaymentTypeModule,
        ProductCategoryModule,
        ProductModule,
        ProductConfigurationModule,
        ProductItemsModule,
        PromotionModule,
        PromotionCategoryModule,
        VariationModule,
        VariationOptionModule,
    ],
    controllers: [AppController],
    providers: [AppService, HelperService],
})
export class AppModule {}
