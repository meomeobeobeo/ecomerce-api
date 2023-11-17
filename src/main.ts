import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  await app.listen(3002);

  console.log("app listen at http://localhost:3002")
}
bootstrap();
