import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCustomerSidebarComponent } from './new-customer-sidebar.component';

describe('NewCustomerSidebarComponent', () => {
  let component: NewCustomerSidebarComponent;
  let fixture: ComponentFixture<NewCustomerSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCustomerSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCustomerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
