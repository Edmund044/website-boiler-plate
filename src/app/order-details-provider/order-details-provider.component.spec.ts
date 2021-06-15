import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsProviderComponent } from './order-details-provider.component';

describe('OrderDetailsProviderComponent', () => {
  let component: OrderDetailsProviderComponent;
  let fixture: ComponentFixture<OrderDetailsProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailsProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailsProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
