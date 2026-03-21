import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TipocortesService } from '../../services/tipocortesService';
import { ProfissionalService } from '../../services/profissionalService';
import { HorarioService } from '../../services/horario-service';

@Component({
  selector: 'app-tela-confirmar',
  imports: [RouterLink],
  templateUrl: './tela-confirmar.html',
  styleUrl: './tela-confirmar.css',
})
export class TelaConfirmar {
corteSelecionado: any;
profissionalSelecionado: any;
horarioSelecionado: any;
dataSelecionada: any

  constructor(
    private tipoCortesService: TipocortesService,
    private profissionalService: ProfissionalService,
    private horarioService: HorarioService
  ) {}
  ngOnInit(): void {
    this.corteSelecionado = this.tipoCortesService.getCorte();
    this.profissionalSelecionado= this.profissionalService.getProfissional();
    this.horarioSelecionado = this.horarioService.getHorario();
    this.dataSelecionada = this.horarioService.getData();
    
    

  }

}
