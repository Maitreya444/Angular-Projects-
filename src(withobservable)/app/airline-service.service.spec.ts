import { TestBed } from '@angular/core/testing';

import { AirlineServiceService } from './airline-service.service';

describe('AirlineServiceService', () => {
  let service: AirlineServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirlineServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
