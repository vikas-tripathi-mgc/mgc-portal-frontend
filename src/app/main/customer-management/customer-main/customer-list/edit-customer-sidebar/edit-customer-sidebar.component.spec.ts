import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCustomerSidebarComponent } from './edit-customer-sidebar.component';

describe('EditCustomerSidebarComponent', () => {
  let component: EditCustomerSidebarComponent;
  let fixture: ComponentFixture<EditCustomerSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCustomerSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCustomerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
