import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes, Req } from '@nestjs/common'
import { CountryService } from './country.service'
import { CreateCountryDto } from './dto/create-country.dto'
import { UpdateCountryDto } from './dto/update-country.dto'
import { Request } from 'express'

@Controller('admin/country')
export class CountryController {
    constructor(private readonly countryService: CountryService) {}

    @UsePipes(new ValidationPipe())
    @Post()
    create(@Body() createCountryDto: CreateCountryDto) {
        return this.countryService.create(createCountryDto)
    }

    @Get()
    findAll() {
        return this.countryService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.countryService.findOne(id)
    }

    @UsePipes(new ValidationPipe())
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCountryDto: UpdateCountryDto) {
        console.log(updateCountryDto)
        return this.countryService.update(id, updateCountryDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string, @Req() req: Request) {
        console.log(req.params)
        return this.countryService.remove(id)
    }
}
