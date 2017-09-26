import { TestBed, inject } from '@angular/core/testing';

import { UtilityApiServiceService } from './utility-api-service.service';

describe('UtilityApiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilityApiServiceService]
    });
  });

  it('should be created', inject([UtilityApiServiceService], (service: UtilityApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
