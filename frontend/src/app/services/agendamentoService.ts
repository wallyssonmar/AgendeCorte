import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class AgendamentoService {
  private apiUrl = 'https://localhost:7051/api/Agendamento';

  constructor(private http: HttpClient) {}

  
}