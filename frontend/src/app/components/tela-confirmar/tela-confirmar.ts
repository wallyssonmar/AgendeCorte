import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TipocortesService } from '../../services/tipocortesService';
import { ProfissionalService } from '../../services/profissionalService';
import { HorarioService } from '../../services/horario-service';
import { Agendamento } from '../../models/agendamento';
import { AgendamentoService } from '../../services/agendamentoService';


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
dataSelecionada: any;
agendamento!: Agendamento;

  constructor(
    private tipoCortesService: TipocortesService,
    private profissionalService: ProfissionalService,
    private horarioService: HorarioService,
    private agendamentoService: AgendamentoService
  ) {}
  ngOnInit(): void {
    this.corteSelecionado = this.tipoCortesService.getCorte();
    this.profissionalSelecionado= this.profissionalService.getProfissional();
    this.horarioSelecionado = this.horarioService.getHorario();
    this.dataSelecionada = this.horarioService.getData();

    
  }
  confirmar(){
    this.agendamento = {
      corte: this.corteSelecionado,
      profissional: this.profissionalSelecionado,
      data: this.dataSelecionada,
      horario: this.horarioSelecionado
    }

    this.agendamentoService.setAgendamento(this.agendamento).subscribe(res => {
      console.log('Salvo com sucesso!', res);
    });
  }

}
