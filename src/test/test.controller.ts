import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Req,
    Res,
    HttpCode,
    UseInterceptors,
    Inject,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common'
import { TestService } from './test.service'
import { CreateTestDto } from './dto/create-test.dto'
import { UpdateTestDto } from './dto/update-test.dto'
import { Request, Response } from 'express'
import {
    CACHE_MANAGER,
    CacheInterceptor,
    CacheKey,
    CacheTTL,
} from '@nestjs/cache-manager'
import { Cache } from 'cache-manager'

@Controller('test')
export class TestController {
    constructor(
        private readonly testService: TestService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
    ) {}

    @Post()
    @UsePipes(new ValidationPipe())
    create(@Body() createTestDto: CreateTestDto) {
        return this.testService.create(createTestDto)
    }

    @Get()
    @HttpCode(200)
    @CacheTTL(12)
    @CacheKey('test')
    async findAll(@Req() req: Request, @Res() res: Response) {
        try {
            let getAllResult = await this.testService.getAll()
            console.log(getAllResult)
            res.json(getAllResult)
        } catch (error) {
            console.error(error)
            res.json({
                statusCode: 500,
                message: error,
            })
        }
    }

    @Post('/cache')
    async setCacheData(
        @Req() req: Request,
        @Res() res: Response,
        @Body() body: any,
    ): Promise<any> {
        try {
            let value = body?.value
            await this.cacheManager.set('testCache', value)
            res.json({
                statusCode: 200,
                message: 'cache successfully',
                metaData: '',
            })
        } catch (error) {
            res.json({
                statusCode: 500,
                message: error,
                metaData: '',
            })
        }
    }
    @Get('/cache')
    async getCacheData(
        @Req() req: Request,
        @Res() res: Response,
        @Param() params: any,
    ): Promise<any> {
        try {
            let cacheValue = await this.cacheManager.get('testCache')
            res.json({
                statusCode: 200,
                message: 'successfull',
                metaData: {
                    cacheValue: cacheValue,
                },
            })
        } catch (error) {
            res.json({
                statusCode: 500,
                message: error,
                metaData: '',
            })
        }
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.testService.findOne(+id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateTestDto: UpdateTestDto) {
        return this.testService.update(+id, updateTestDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.testService.remove(+id)
    }
}
