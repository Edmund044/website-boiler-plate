import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsProviderComponent } from './notifications-provider.component';

describe('NotificationsProviderComponent', () => {
  let component: NotificationsProviderComponent;
  let fixture: ComponentFixture<NotificationsProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationsProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
