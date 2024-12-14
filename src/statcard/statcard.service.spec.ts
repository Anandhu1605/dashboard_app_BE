import { Test, TestingModule } from '@nestjs/testing';
import { StatcardService } from './statcard.service';

describe('StatcardService', () => {
  let service: StatcardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatcardService],
    }).compile();

    service = module.get<StatcardService>(StatcardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
