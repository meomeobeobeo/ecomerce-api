import { CacheModule } from '@nestjs/cache-manager'
import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { OtpService } from 'src/otp/otp.service'
import { ConfigModule, ConfigService } from '@nestjs/config'
import * as redisStore from 'cache-manager-redis-store'
@Module({
    imports: [
        CacheModule.register({
            isGlobal: true,
            store: redisStore,
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
            ttl: 120,
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, OtpService],
})
export class AuthModule {}
