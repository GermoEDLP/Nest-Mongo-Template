import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { FirebaseConfig } from './app.firebase';
import { AppModule } from './app.module';
import { initSwagger } from './app.swagger';
import { PORT } from './config/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);

  // Prefijo global de la aplicación
  app.setGlobalPrefix('v1/api');

  //inicializador del Swagger
  initSwagger(app);

  //inicializador de CORS
  app.enableCors();

  // const FBConfig = new FirebaseConfig(config);
  // FBConfig.initializeApp();

  const port = parseInt(config.get<string>(PORT)) || 3000;

  // Pipe de validación de los datos de entrada usando Class-Validation y class-transformer
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(port);
}
bootstrap();
