import { Test, TestingModule } from '@nestjs/testing';
import { ReferenceValueService } from './reference-value.service';

describe('ReferenceValueService', () => {
  let service: ReferenceValueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReferenceValueService],
    }).compile();

    service = module.get<ReferenceValueService>(ReferenceValueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
