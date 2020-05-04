import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonnorPage } from './donnor.page';

describe('DonnorPage', () => {
  let component: DonnorPage;
  let fixture: ComponentFixture<DonnorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonnorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonnorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
