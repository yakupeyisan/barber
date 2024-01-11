import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorkingRangeAddComponent } from './user-working-range-add.component';

describe('UserWorkingRangeAddComponent', () => {
  let component: UserWorkingRangeAddComponent;
  let fixture: ComponentFixture<UserWorkingRangeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserWorkingRangeAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserWorkingRangeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
