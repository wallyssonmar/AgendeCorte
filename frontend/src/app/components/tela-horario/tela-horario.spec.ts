import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaHorario } from './tela-horario';

describe('TelaHorario', () => {
  let component: TelaHorario;
  let fixture: ComponentFixture<TelaHorario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaHorario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaHorario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
