import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaConfirmar } from './tela-confirmar';

describe('TelaConfirmar', () => {
  let component: TelaConfirmar;
  let fixture: ComponentFixture<TelaConfirmar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaConfirmar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaConfirmar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
