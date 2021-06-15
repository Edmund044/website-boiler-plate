import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsUserComponent } from './order-details-user.component';

describe('OrderDetailsUserComponent', () => {
  let component: OrderDetailsUserComponent;
  let fixture: ComponentFixture<OrderDetailsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailsUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
