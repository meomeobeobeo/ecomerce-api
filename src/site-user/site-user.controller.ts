import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common'
import { SiteUserService } from './site-user.service'

@Controller('site-user')
export class SiteUserController {
    constructor(private readonly siteUserService: SiteUserService) {}

    @Post()
    create() {}

    @Get()
    findAll() {
        return this.siteUserService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {}

    @Patch(':id')
    update(@Param('id') id: string) {}

    @Delete(':id')
    remove(@Param('id') id: string) {}
}
