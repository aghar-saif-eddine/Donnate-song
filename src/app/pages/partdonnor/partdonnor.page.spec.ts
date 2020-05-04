import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartdonnorPage } from './partdonnor.page';

describe('PartdonnorPage', () => {
  let component: PartdonnorPage;
  let fixture: ComponentFixture<PartdonnorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartdonnorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartdonnorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
