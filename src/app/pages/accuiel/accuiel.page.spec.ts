import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccuielPage } from './accuiel.page';

describe('AccuielPage', () => {
  let component: AccuielPage;
  let fixture: ComponentFixture<AccuielPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccuielPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccuielPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
