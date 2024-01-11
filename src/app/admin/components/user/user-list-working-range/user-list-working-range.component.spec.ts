import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListWorkingRangeComponent } from './user-list-working-range.component';

describe('UserListWorkingRangeComponent', () => {
  let component: UserListWorkingRangeComponent;
  let fixture: ComponentFixture<UserListWorkingRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListWorkingRangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserListWorkingRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
