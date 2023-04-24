import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmaListComponent } from './rma-list.component';

describe('RmaListComponent', () => {
  let component: RmaListComponent;
  let fixture: ComponentFixture<RmaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RmaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RmaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
