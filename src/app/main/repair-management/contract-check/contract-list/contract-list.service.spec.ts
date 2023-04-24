import { TestBed } from '@angular/core/testing';

import { ContractListService } from './contract-list.service';

describe('ContractListService', () => {
  let service: ContractListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
