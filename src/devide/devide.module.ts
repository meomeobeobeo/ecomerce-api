import { Module } from '@nestjs/common'
import { DevideService } from './devide.service'
import { DevideController } from './devide.controller'

@Module({
    controllers: [DevideController],
    providers: [DevideService],
})
export class DevideModule {}
