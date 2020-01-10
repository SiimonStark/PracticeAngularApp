import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaurenComponent } from './lauren.component';

describe('LaurenComponent', () => {
  let component: LaurenComponent;
  let fixture: ComponentFixture<LaurenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaurenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaurenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
