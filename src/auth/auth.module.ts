import { CacheModule } from '@nestjs/cache-manager'
import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { OtpService } from 'src/otp/otp.service'
import { ConfigModule, ConfigService } from '@nestjs/config'
import * as redisStore from 'cache-manager-redis-store'
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from './strategy'
@Module({
    imports: [
        JwtModule
    ],
    controllers: [AuthController],
    providers: [AuthService, OtpService , JwtStrategy],
})
export class AuthModule {}
