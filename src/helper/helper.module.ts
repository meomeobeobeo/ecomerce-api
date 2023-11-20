import { Global, Module } from '@nestjs/common'
import { HelperService } from './helper.service'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { OtpService } from 'src/otp/otp.service'
import { RedisManagerService } from 'src/redis-manager/redis-manager.service'
import { CacheModule } from '@nestjs/cache-manager'
import * as redisStore from 'cache-manager-redis-store'

// help export global to use ConfigService
@Global()
@Module({
    providers: [HelperService, ConfigService, OtpService],
    exports: [HelperService, ConfigService],
})
export class HelperModule {}
