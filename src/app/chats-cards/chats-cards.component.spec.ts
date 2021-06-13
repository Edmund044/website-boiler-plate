import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsCardsComponent } from './chats-cards.component';

describe('ChatsCardsComponent', () => {
  let component: ChatsCardsComponent;
  let fixture: ComponentFixture<ChatsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatsCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
