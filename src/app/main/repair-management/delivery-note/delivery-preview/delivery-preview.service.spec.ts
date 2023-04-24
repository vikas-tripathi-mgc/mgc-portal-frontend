import { TestBed } from '@angular/core/testing';

import { DeliveryPreviewService } from './delivery-preview.service';

describe('DeliveryPreviewService', () => {
  let service: DeliveryPreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryPreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
