/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EiturCardComponent } from './Eitur-card.component';

describe('EiturCardComponent', () => {
  let component: EiturCardComponent;
  let fixture: ComponentFixture<EiturCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EiturCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EiturCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
