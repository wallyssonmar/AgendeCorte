import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';
import { TipocortesService } from '../../services/tipocortesService';
import { TipoCorte } from '../../models/cortes';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tela-corte',
  imports: [RouterLink, CommonModule],
  templateUrl: './tela-corte.html',
  styleUrl: './tela-corte.css',
})
export class TelaCorte {
  corteSelecionado = '';
  selectedTipo : any = null;
  cortes: TipoCorte[] = [];
  

  constructor(private tipocortesService: TipocortesService,) {}

  ngOnInit(): void {
    this.cortes = this.tipocortesService.cortes;
  }
  selecionarCorte(corte: any) {
    this.tipocortesService.setCorte(corte);
    this.selectedTipo = corte;
  }

  
}
