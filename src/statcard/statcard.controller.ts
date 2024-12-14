import { Controller, Get, Post, Body } from '@nestjs/common';
import { StatCardService } from './statcard.service';
import { Statcard } from './entities/statcard.entity';
import { CreateStatCardDto } from './dto/create-statcard.dto';
import { StatCard } from './schema/statcard.schema';


@Controller('cards')
export class CardController {
  constructor(private readonly cardService: StatCardService) {}

  // Endpoint to get all cards
  @Get()
  async findAll(): Promise<Statcard[]> {
    return this.cardService.findAll();
  }

  // Endpoint to create a new card
  @Post('/add')
  async create(@Body() createCardDto: CreateStatCardDto): Promise<StatCard> {
    return this.cardService.create(createCardDto);
  }
}
