import { Module } from '@nestjs/common';
import { CatalogsController } from './catalogs.controller';
import { CatalogsService } from './catalogs.service';

@Module({
  imports: [],
  controllers: [CatalogsController],
  providers: [CatalogsService],
})
export class CatalogsModule {}
