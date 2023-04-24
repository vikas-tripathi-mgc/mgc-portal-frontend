import { TestBed } from '@angular/core/testing';

import { DeliveryListService } from './delivery-list.service';

describe('DeliveryListService', () => {
  let service: DeliveryListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
