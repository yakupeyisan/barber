import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSetWorkingRangeComponent } from './user-set-working-range.component';

describe('UserSetWorkingRangeComponent', () => {
  let component: UserSetWorkingRangeComponent;
  let fixture: ComponentFixture<UserSetWorkingRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSetWorkingRangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserSetWorkingRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
