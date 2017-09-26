import { TestBed, inject } from '@angular/core/testing';

import { VendorApiserviceService } from './vendor-apiservice.service';

describe('VendorApiserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VendorApiserviceService]
    });
  });

  it('should be created', inject([VendorApiserviceService], (service: VendorApiserviceService) => {
    expect(service).toBeTruthy();
  }));
});
