import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsCardViewComponent } from './contacts-card-view.component';

describe('ContactsCardViewComponent', () => {
  let component: ContactsCardViewComponent;
  let fixture: ComponentFixture<ContactsCardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsCardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
