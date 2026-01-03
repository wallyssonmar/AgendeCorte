import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TipocortesService } from '../../services/tipocortesService';

@Component({
  selector: 'app-tela-profissional',
  imports: [RouterLink],
  templateUrl: './tela-profissional.html',
  styleUrl: './tela-profissional.css',
})
export class TelaProfissional {
  constructor(private tipodeCorte : TipocortesService){}
  teste(){
    var teste2 = this.tipodeCorte.getCorte()
    console.log(teste2);
  }
}
