import { Corte } from "./corte";
import { Profissional } from "./profissional";

export interface Agendamento{

    id?: number;
    corte: Corte;
    profissional: Profissional;
    data: number;
    horario: number;
 
}