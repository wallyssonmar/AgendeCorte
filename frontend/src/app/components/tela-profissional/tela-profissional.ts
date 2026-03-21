import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

import { ProfissionalService } from '../../services/profissionalService';
import { Profissional } from '../../models/profissional';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tela-profissional',
  imports: [RouterLink,CommonModule],
  templateUrl: './tela-profissional.html',
  styleUrl: './tela-profissional.css',
})
export class TelaProfissional {
  profissionals : Profissional[] = [];
  profissionalSelected : any = null;
  constructor(private profissionalService : ProfissionalService){}
  
  

  ngOnInit(): void {
    this.profissionals = this.profissionalService.profissionals;
  }

  selecionarProfissional(profissional : any){
    this.profissionalService.setProfissional(profissional);
    this.profissionalSelected = profissional;
  }
}
