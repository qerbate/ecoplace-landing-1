import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoPageComponent } from './who-page.component';

describe('WhoPageComponent', () => {
  let component: WhoPageComponent;
  let fixture: ComponentFixture<WhoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
