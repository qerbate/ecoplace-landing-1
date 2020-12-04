import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactStatComponent } from './contact-stat.component';

describe('ContactStatComponent', () => {
  let component: ContactStatComponent;
  let fixture: ComponentFixture<ContactStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
