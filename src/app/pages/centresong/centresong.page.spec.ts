import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentresongPage } from './centresong.page';

describe('CentresongPage', () => {
  let component: CentresongPage;
  let fixture: ComponentFixture<CentresongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentresongPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentresongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
