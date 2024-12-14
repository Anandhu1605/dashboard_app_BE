import { Test, TestingModule } from '@nestjs/testing';
import { StatcardController } from './statcard.controller';
import { StatcardService } from './statcard.service';

describe('StatcardController', () => {
  let controller: StatcardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatcardController],
      providers: [StatcardService],
    }).compile();

    controller = module.get<StatcardController>(StatcardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
