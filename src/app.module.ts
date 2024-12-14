import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import {MongooseModule} from '@nestjs/mongoose';
import config from './config/keys'
import { CardModule } from './statcard/statcard.module';

@Module({
  imports: [LoginModule, MongooseModule.forRoot(config.mongoURL), CardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
