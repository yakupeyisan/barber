import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSetCredentialComponent } from './user-set-credential.component';

describe('UserSetCredentialComponent', () => {
  let component: UserSetCredentialComponent;
  let fixture: ComponentFixture<UserSetCredentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSetCredentialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserSetCredentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
