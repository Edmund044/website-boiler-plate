import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordProviderComponent } from './forgot-password-provider.component';

describe('ForgotPasswordProviderComponent', () => {
  let component: ForgotPasswordProviderComponent;
  let fixture: ComponentFixture<ForgotPasswordProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPasswordProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
