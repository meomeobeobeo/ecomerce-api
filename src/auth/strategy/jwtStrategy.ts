import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { Cache } from 'cache-manager'
import { ExtractJwt, Strategy } from 'passport-jwt'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(
        configService: ConfigService,
        @Inject(CACHE_MANAGER) private cacheService: Cache,
    ) {
        super({
            //token string is added to every request(except login / register)
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get('JWT_SECRET'),
        })
    }
    validate(payload: any) {
        // verify with information in payload.

        console.log(payload)
        return payload
    }
    
}
