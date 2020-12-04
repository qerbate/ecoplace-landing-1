import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactScheduleComponent } from './contact-schedule.component';

describe('ContactScheduleComponent', () => {
  let component: ContactScheduleComponent;
  let fixture: ComponentFixture<ContactScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
