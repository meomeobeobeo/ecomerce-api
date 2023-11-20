import {
    Body,
    Controller,
    Get,
    Inject,
    Post,
    Req,
    Res,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common'
import { Request, Response } from 'express' // Import Request and Response from the 'express' library
import { Users } from './user.dto'
import { plainToClass } from 'class-transformer'
import { ModuleRef } from '@nestjs/core'
import { UserService } from './user.service'

interface ValueProvider {
    name: string
    age: number
    favorite: string
}

@Controller('users')
export class UserController {
    private valueProvider: ValueProvider
    // private saveData : any

    constructor(private readonly moduleRef: ModuleRef) {
        // this.saveData = saveData
    }

    @UsePipes(new ValidationPipe()) // use validater
    @Get()
    getAllUser(@Req() req: Request, @Res() res: Response): any {
        res.json([
            {
                name: 'minhduc',
                age: 22,
            },
            {
                name: 'minh anh',
                age: 22,
            },
        ])
    }

    @UsePipes(new ValidationPipe())
    @Post()
    createNewUser(
        @Req() req: Request,
        @Res() res: Response,
        @Body() user: Users,
    ): any {
        // Access the valueProvider property from the constructor

        const userService = this.moduleRef.get(UserService, { strict: false })
        const result = userService.createUser(user)

        res.json(result)
    }
}
