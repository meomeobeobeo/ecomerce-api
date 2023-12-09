import { Controller, Post, Req, UploadedFiles, UseInterceptors } from '@nestjs/common'
import { FilesInterceptor } from '@nestjs/platform-express'
import { Request } from 'express'
import { UploadImageService } from './upload-image.service'

@Controller('upload')
export class UploadImageController {
    constructor(private readonly uploadImageService: UploadImageService) {}

    @Post('image')
    @UseInterceptors(FilesInterceptor('files'))
    async uploadImageToFirebase(@UploadedFiles() files: Express.Multer.File[], @Req() req: Request) {
        console.log(files) // Array of uploaded files
        console.log(req.body) // Other form data if any

        return this.uploadImageService.uploadImageToFirebase(files)
    }
}
