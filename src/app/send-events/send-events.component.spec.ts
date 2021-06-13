import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendEventsComponent } from './send-events.component';

describe('SendEventsComponent', () => {
  let component: SendEventsComponent;
  let fixture: ComponentFixture<SendEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
