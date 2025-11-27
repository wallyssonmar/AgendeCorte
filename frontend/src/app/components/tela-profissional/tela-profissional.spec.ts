import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaProfissional } from './tela-profissional';

describe('TelaProfissional', () => {
  let component: TelaProfissional;
  let fixture: ComponentFixture<TelaProfissional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaProfissional]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaProfissional);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
