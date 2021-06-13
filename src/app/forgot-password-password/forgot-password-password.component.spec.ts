import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordPasswordComponent } from './forgot-password-password.component';

describe('ForgotPasswordPasswordComponent', () => {
  let component: ForgotPasswordPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPasswordPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
