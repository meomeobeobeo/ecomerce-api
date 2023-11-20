import { Global, Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { ConfigModule, ConfigService } from '@nestjs/config'

@Global()
@Module({
    providers: [PrismaService],
    exports: [PrismaService], // service có thể dùng chung cho nhiều nơi
})
export class PrismaModule {}
