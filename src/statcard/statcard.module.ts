import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Statcard } from './entities/statcard.entity';
import { CardSchema } from './schema/statcard.schema';
import { CardController } from './statcard.controller';
import { StatCardService } from './statcard.service';


@Module({
  imports: [MongooseModule.forFeature([{ name: Statcard.name, schema: CardSchema }])],
  providers: [StatCardService],
  controllers: [CardController],
})
export class CardModule {}
