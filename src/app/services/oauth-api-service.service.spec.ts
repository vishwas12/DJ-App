import { TestBed, inject } from '@angular/core/testing';

import { OauthApiServiceService } from './oauth-api-service.service';

describe('OauthApiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OauthApiServiceService]
    });
  });

  it('should be created', inject([OauthApiServiceService], (service: OauthApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
