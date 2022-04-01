import { Module } from '@nestjs/common';

import { ProductosModule } from './modules/productos/productos.module';
import { DatabaseModule } from './modules/cats/database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './modules/cats/cats.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), CatsModule],
})
export class AppModule {}
