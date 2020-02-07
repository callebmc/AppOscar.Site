/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VotosEscolhidosComponent } from './votos-escolhidos.component';

describe('VotosEscolhidosComponent', () => {
  let component: VotosEscolhidosComponent;
  let fixture: ComponentFixture<VotosEscolhidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotosEscolhidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotosEscolhidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
