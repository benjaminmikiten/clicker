import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from "./app.module.js";

const app = await NestFactory.create(AppModule);

// Swagger setup
const config = new DocumentBuilder()
  .setTitle('Clicker API')
  .setVersion('1.0')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

await app.listen(3000, "0.0.0.0");
