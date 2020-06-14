/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DahbelhnaComponent } from './Dahbelhna.component';

describe('DahbelhnaComponent', () => {
  let component: DahbelhnaComponent;
  let fixture: ComponentFixture<DahbelhnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DahbelhnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DahbelhnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
