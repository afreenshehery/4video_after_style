import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vdo2Component } from './vdo2.component';

describe('Vdo2Component', () => {
  let component: Vdo2Component;
  let fixture: ComponentFixture<Vdo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vdo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vdo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
