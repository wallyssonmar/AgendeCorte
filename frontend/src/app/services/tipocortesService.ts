import { Injectable } from '@angular/core';
import { TipoCorte } from '../models/cortes';

@Injectable({
  providedIn: 'root',
})
export class TipocortesService {
  corteSelecionado: any;

  cortes: TipoCorte [] =
  [{name: 'Corte Tradicional', price: 35, time: 30},
   {name: 'Barba', price: 25, time: 25},
   {name: 'Degradê', price: 45, time: 50},
   {name: 'Corte + Barba', price: 55, time: 45},
   {name: 'Pigmentação', price: 30, time: 30},
   {name: 'Corte navalhado', price: 40, time: 35},
  ]

  

  setCorte(corte:any){
    this.corteSelecionado = corte;
  }

  getCorte(){
    return this.corteSelecionado;
  }
}
