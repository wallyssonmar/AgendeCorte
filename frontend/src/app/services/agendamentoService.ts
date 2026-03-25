import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agendamento } from '../models/agendamento';


@Injectable({
  providedIn: 'root',
})
export class AgendamentoService {
  private apiUrl = 'https://localhost:7051/api/Agendamento';

  constructor(private http: HttpClient) {}

  setAgendamento(agendamento: Agendamento){
    return this.http.post(this.apiUrl,agendamento)
  }
}