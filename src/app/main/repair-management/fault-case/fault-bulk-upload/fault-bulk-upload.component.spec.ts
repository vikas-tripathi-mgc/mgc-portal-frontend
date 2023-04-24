import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultBulkUploadComponent } from './fault-bulk-upload.component';

describe('FaultBulkUploadComponent', () => {
  let component: FaultBulkUploadComponent;
  let fixture: ComponentFixture<FaultBulkUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaultBulkUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaultBulkUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
