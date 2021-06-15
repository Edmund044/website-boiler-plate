import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationDetailsProviderComponent } from './notification-details-provider.component';

describe('NotificationDetailsProviderComponent', () => {
  let component: NotificationDetailsProviderComponent;
  let fixture: ComponentFixture<NotificationDetailsProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationDetailsProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationDetailsProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
