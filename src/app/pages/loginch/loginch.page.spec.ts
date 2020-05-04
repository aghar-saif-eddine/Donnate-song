import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginchPage } from './loginch.page';

describe('LoginchPage', () => {
  let component: LoginchPage;
  let fixture: ComponentFixture<LoginchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
