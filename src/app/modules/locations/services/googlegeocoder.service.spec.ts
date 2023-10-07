import { TestBed } from '@angular/core/testing';

import { GooglegeocoderService } from './googlegeocoder.service';

describe('GooglegeocoderService', () => {
  let service: GooglegeocoderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GooglegeocoderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
