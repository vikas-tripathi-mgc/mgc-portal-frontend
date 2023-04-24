import { TestBed } from '@angular/core/testing';

import { DeliveryNewService } from './delivery-new.service';

describe('DeliveryNewService', () => {
  let service: DeliveryNewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryNewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
