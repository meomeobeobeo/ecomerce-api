import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { VariationOptionService } from './variation-option.service'
import { CreateVariationOptionDto } from './dto/create-variation-option.dto'
import { UpdateVariationOptionDto } from './dto/update-variation-option.dto'

@Controller('admin/variation-option')
export class VariationOptionController {
    constructor(private readonly variationOptionService: VariationOptionService) {}

    @Post()
    create(@Body() createVariationOptionDto: CreateVariationOptionDto) {
        return this.variationOptionService.create(createVariationOptionDto)
    }

    @Get()
    findAll() {
        return this.variationOptionService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.variationOptionService.findOne(id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateVariationOptionDto: UpdateVariationOptionDto) {
        return this.variationOptionService.update(id, updateVariationOptionDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.variationOptionService.remove(id)
    }
}
