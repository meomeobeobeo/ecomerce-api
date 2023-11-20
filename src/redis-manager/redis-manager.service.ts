import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Cache } from 'cache-manager'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class RedisManagerService {
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
}
