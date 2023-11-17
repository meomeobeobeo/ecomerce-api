import { Module } from '@nestjs/common'
import { OtpService } from './otp.service'
import { CacheModule } from '@nestjs/cache-manager'
import { ConfigModule, ConfigService } from '@nestjs/config'
import * as redisStore from 'cache-manager-redis-store';
@Module({
    providers: [OtpService],
})
export class OtpModule {}
