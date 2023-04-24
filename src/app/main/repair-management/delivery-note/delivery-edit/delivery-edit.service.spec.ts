import { TestBed } from '@angular/core/testing';

import { DeliveryEditService } from './delivery-edit.service';

describe('DeliveryEditService', () => {
  let service: DeliveryEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
