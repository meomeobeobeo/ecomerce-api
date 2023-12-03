import { Module } from '@nestjs/common'
import { TestService } from './test.service'
import { TestController } from './test.controller'
import { PrismaService } from 'src/prisma/prisma.service'
import { RedisManagerModule } from 'src/redis-manager/redis-manager.module'
import { CacheModule } from '@nestjs/cache-manager'
import { ConfigModule, ConfigService } from '@nestjs/config'
import * as redisStore from 'cache-manager-redis-store'

@Module({
    imports: [
        // CacheModule.registerAsync({
        //     imports: [ConfigModule],
        //     inject: [ConfigService],
        //     useFactory: async (configService: ConfigService) => ({
        //         //isGlobal: true,
        //         store: redisStore,
        //         host: configService.get('REDIS_HOST'),
        //         port: configService.get('REDIS_PORT'),
        //         ttl: 20,
        //     }),
        // }),
    ],
    controllers: [TestController],
    providers: [TestService, PrismaService],
})
export class TestModule {}
