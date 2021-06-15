import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterUserComponent } from './newsletter-user.component';

describe('NewsletterUserComponent', () => {
  let component: NewsletterUserComponent;
  let fixture: ComponentFixture<NewsletterUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
