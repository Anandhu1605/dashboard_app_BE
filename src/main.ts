import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core/nest-factory';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000', // Allow only the front-end's origin
    methods: 'GET, POST, PUT, DELETE', // Allow specific HTTP methods
    allowedHeaders: 'Content-Type, Authorization', // Allow specific headers
  });
  // Enable global validation
  app.useGlobalPipes(new ValidationPipe({
    transform: true, // Automatically transform payloads to DTOs
    whitelist: true, // Strip properties that are not in the DTO
    forbidNonWhitelisted: true, // Throw an error if extra properties are found
  }));

  await app.listen(3003);
}
bootstrap();
