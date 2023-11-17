import { Global, Module } from '@nestjs/common';
import { RedisManagerService } from './redis-manager.service';
import { CACHE_MANAGER, CacheModule } from '@nestjs/cache-manager';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Global()
@Module({
 
  providers: [RedisManagerService ]
})
export class RedisManagerModule {}
