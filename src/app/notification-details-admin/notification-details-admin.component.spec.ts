import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationDetailsAdminComponent } from './notification-details-admin.component';

describe('NotificationDetailsAdminComponent', () => {
  let component: NotificationDetailsAdminComponent;
  let fixture: ComponentFixture<NotificationDetailsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationDetailsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
