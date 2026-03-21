import { ChangeDetectorRef, Component, Inject, PLATFORM_ID } from '@angular/core';

import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';

import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { HorarioService } from '../../services/horario-service';

@Component({
  selector: 'app-tela-horario',
  standalone: true,
  imports: [RouterLink, FullCalendarModule, CommonModule],
  templateUrl: './tela-horario.html',
  styleUrl: './tela-horario.css',
})
export class TelaHorario {
  horarios: string[] = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
  isBrowser = false;
  calendarOptions!: CalendarOptions;
  dataSelecionada: string | null = null;
  selectedHorario : any = null;

  constructor(@Inject(PLATFORM_ID) platformId: Object, private cdr: ChangeDetectorRef, private horarioService : HorarioService) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      this.calendarOptions = {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',

        dateClick: this.onDateClick.bind(this),
      };
    }
  }
  onDateClick(info: any): void {
    this.dataSelecionada = info.dateStr;
    this.horarioService.setData(this.dataSelecionada);
    this.cdr.detectChanges();
  }
  horarioSelecionado(horario : any){
    this.horarioService.setHorario(horario);
    this.selectedHorario = horario;
  }
}
