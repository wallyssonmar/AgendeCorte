import { Routes } from '@angular/router';
import path from 'node:path';
import { TelaCorte } from './components/tela-corte/tela-corte';
import { TelaProfissional } from './components/tela-profissional/tela-profissional';
import { TelaHorario } from './components/tela-horario/tela-horario';
import { TelaConfirmar } from './components/tela-confirmar/tela-confirmar';

export const routes: Routes = [
    {path: '',component: TelaCorte},
    {path: 'corte',component: TelaCorte},
    {path: 'profissional',component: TelaProfissional},
    {path: 'horario',component: TelaHorario},
    {path: 'confirmar',component: TelaConfirmar}
];
