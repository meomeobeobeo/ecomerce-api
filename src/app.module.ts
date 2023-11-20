import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SiteUserModule } from './site-user/site-user.module'
import { AuthModule } from './auth/auth.module'
import { UserAddressModule } from './user_address/user_address.module'
import { AddressModule } from './address/address.module'
import { TestModule } from './test/test.module'
import { PrismaModule } from './prisma/prisma.module'
import { HelperService } from './helper/helper.service'
import { HelperModule } from './helper/helper.module'
import { OtpModule } from './otp/otp.module'
import { RedisManagerModule } from './redis-manager/redis-manager.module'
import { ConfigModule } from '@nestjs/config'
import { CacheModule } from '@nestjs/cache-manager'
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
        AddressModule,
        TestModule,
        TestModule,
        PrismaModule,
        HelperModule,
        OtpModule,
        RedisManagerModule,
    ],
    controllers: [AppController],
    providers: [AppService, HelperService],
})
export class AppModule {}
