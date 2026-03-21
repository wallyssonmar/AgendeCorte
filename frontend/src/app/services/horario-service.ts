import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HorarioService {
  dataSelect: any;
  horarioSelect: any;

  setData(data: any){
    this.dataSelect = data;
    
  }

  getData(){
    return this.dataSelect;
  }

  setHorario(horario: any){
    this.horarioSelect = horario;
    
  }

  getHorario () {
    return this.horarioSelect;
  }

}
