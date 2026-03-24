import { Corte } from "./corte";
import { Profissional } from "./profissional";

export interface Agendamento{

    id: Number;
    corte: Corte;
    profissional: Profissional;
    data: Number;
    horario: Number;
 
}