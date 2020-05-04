import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListechercheurPage } from './listechercheur.page';

describe('ListechercheurPage', () => {
  let component: ListechercheurPage;
  let fixture: ComponentFixture<ListechercheurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListechercheurPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListechercheurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
