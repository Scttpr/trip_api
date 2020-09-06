import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { INestApplication } from "@nestjs/common";

interface SwaggerOptions {
  title: string,
  desc: string,
  version: string,
}

export const setupSwagger = (app: INestApplication, { title, desc, version }: SwaggerOptions) => {
  const swaggerDocumentOption = new DocumentBuilder()
    .setTitle(title)
    .setDescription(desc)
    .setVersion(version)
    .build();

  const document = SwaggerModule.createDocument(app, swaggerDocumentOption);
  SwaggerModule.setup('api', app, document);
}
