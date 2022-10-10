import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromAray2Component } from './from-aray2.component';

describe('FromAray2Component', () => {
  let component: FromAray2Component;
  let fixture: ComponentFixture<FromAray2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromAray2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromAray2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
