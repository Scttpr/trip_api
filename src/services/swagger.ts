import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { INestApplication } from "@nestjs/common";

interface SwaggerOptions {
  title: string,
  description: string,
  version: string,
}

export const setupSwagger = (app: INestApplication, { title, description, version }: SwaggerOptions) => {
  const swaggerDocumentOption = new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .setVersion(version)
    .addTag('trips')
    .addTag('users')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerDocumentOption);
  SwaggerModule.setup('api', app, document);
}
