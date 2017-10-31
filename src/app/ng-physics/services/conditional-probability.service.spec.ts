import { TestBed, inject } from '@angular/core/testing';

import { ConditionalProbabilityService } from './conditional-probability.service';

describe('ConditionalProbabilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConditionalProbabilityService]
    });
  });

  it('should be created', inject([ConditionalProbabilityService], (service: ConditionalProbabilityService) => {
    expect(service).toBeTruthy();
  }));
});
