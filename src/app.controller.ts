// src/app.controller.ts
import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express'; // Import Request and Response types
import path from 'path';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(@Req() req: Request, @Res() res: Response): any {
    res.json({
      message: 'Hello',
      errorCode: 423,
    });
  }
}
