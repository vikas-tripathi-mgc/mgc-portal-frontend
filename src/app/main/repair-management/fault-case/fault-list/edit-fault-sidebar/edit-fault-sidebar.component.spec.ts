import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFaultSidebarComponent } from './edit-fault-sidebar.component';

describe('EditFaultSidebarComponent', () => {
  let component: EditFaultSidebarComponent;
  let fixture: ComponentFixture<EditFaultSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFaultSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFaultSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
