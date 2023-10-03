import { NestFactory } from '@nestjs/core';
import { CatalogsModule } from './catalogs.module';

async function bootstrap() {
  const app = await NestFactory.create(CatalogsModule);
  await app.listen(3000);
}
bootstrap();
