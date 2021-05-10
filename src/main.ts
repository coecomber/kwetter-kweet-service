import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { KweetModule } from './kweet.module';
import { Logger } from '@nestjs/common';
var cors = require('cors')

async function bootstrap() {
  const app = await NestFactory.create(KweetModule);

  const config = new DocumentBuilder()
    .setTitle('Kwetter kweet service')
    .setDescription('This is the kwetter kweet service for Joost.')
    .setVersion('1.0')
    .addTag('kweet')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use(cors())

  await app.listen(process.env.PORT, "0.0.0.0");

  const logger = new Logger('Kweet Service Nest Application');
  logger.log(`Kweet service is running on: ${await app.getUrl()}`);
}
bootstrap();
