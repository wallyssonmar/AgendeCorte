import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCorte } from './tela-corte';

describe('TelaCorte', () => {
  let component: TelaCorte;
  let fixture: ComponentFixture<TelaCorte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaCorte]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaCorte);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
