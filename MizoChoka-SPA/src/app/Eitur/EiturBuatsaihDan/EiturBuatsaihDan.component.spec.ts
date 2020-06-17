/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EiturBuatsaihDanComponent } from './EiturBuatsaihDan.component';

describe('EiturBuatsaihDanComponent', () => {
  let component: EiturBuatsaihDanComponent;
  let fixture: ComponentFixture<EiturBuatsaihDanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EiturBuatsaihDanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EiturBuatsaihDanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
