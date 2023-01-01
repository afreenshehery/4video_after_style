import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vdo4Component } from './vdo4.component';

describe('Vdo4Component', () => {
  let component: Vdo4Component;
  let fixture: ComponentFixture<Vdo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vdo4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vdo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
