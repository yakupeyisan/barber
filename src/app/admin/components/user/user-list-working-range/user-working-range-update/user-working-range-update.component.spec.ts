import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorkingRangeUpdateComponent } from './user-working-range-update.component';

describe('UserWorkingRangeUpdateComponent', () => {
  let component: UserWorkingRangeUpdateComponent;
  let fixture: ComponentFixture<UserWorkingRangeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserWorkingRangeUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserWorkingRangeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
