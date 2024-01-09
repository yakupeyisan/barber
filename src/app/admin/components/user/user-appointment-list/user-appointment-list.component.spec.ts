import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAppointmentListComponent } from './user-appointment-list.component';

describe('UserAppointmentListComponent', () => {
  let component: UserAppointmentListComponent;
  let fixture: ComponentFixture<UserAppointmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAppointmentListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserAppointmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
