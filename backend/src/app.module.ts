import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user.module';
import 'dotenv/config';
import {dataSourceOptions} from './data-source';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
