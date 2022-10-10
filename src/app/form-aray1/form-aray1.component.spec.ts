import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAray1Component } from './form-aray1.component';

describe('FormAray1Component', () => {
  let component: FormAray1Component;
  let fixture: ComponentFixture<FormAray1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAray1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAray1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
