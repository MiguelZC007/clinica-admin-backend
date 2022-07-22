import { Test, TestingModule } from '@nestjs/testing';
import { CategoryAnalysisController } from './category-analysis.controller';
import { CategoryAnalysisService } from './category-analysis.service';

describe('CategoryAnalysisController', () => {
  let controller: CategoryAnalysisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryAnalysisController],
      providers: [CategoryAnalysisService],
    }).compile();

    controller = module.get<CategoryAnalysisController>(CategoryAnalysisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
