import { TestBed } from '@angular/core/testing';

import { FaultBulkUploadService } from './fault-bulk-upload.service';

describe('FaultBulkUploadService', () => {
  let service: FaultBulkUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaultBulkUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
