import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationDetailsUserComponent } from './notification-details-user.component';

describe('NotificationDetailsUserComponent', () => {
  let component: NotificationDetailsUserComponent;
  let fixture: ComponentFixture<NotificationDetailsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationDetailsUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationDetailsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
