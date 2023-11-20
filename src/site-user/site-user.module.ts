import { Module } from '@nestjs/common'
import { SiteUserService } from './site-user.service'
import { SiteUserController } from './site-user.controller'

@Module({
    controllers: [SiteUserController],
    providers: [SiteUserService],
})
export class SiteUserModule {}
