import { Test, TestingModule } from '@nestjs/testing';
import { ReferenceValueController } from './reference-value.controller';
import { ReferenceValueService } from './reference-value.service';

describe('ReferenceValueController', () => {
  let controller: ReferenceValueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReferenceValueController],
      providers: [ReferenceValueService],
    }).compile();

    controller = module.get<ReferenceValueController>(ReferenceValueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
