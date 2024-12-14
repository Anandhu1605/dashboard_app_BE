import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStatCardDto } from './dto/create-statcard.dto';
import { Statcard } from './entities/statcard.entity';
import { StatCard } from './schema/statcard.schema';

@Injectable()
export class StatCardService {
  constructor(@InjectModel(Statcard.name) private readonly cardModel: Model<StatCard>) {}

  // Fetch all cards
  async findAll(): Promise<StatCard[]> {
    return this.cardModel.find().exec();
  }

  // Create a new card
  async create(createCardDto: CreateStatCardDto): Promise<StatCard> {
    const createdCard = new this.cardModel(createCardDto);
    return createdCard.save();
  }
}
