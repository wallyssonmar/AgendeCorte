import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfissionalService {
  profissionalSelected: any;

  profissionals = [
    {name: 'Cristiano Ronaldo', disponivel: true},
    {name: 'Tom Cruise', disponivel: true},
    {name: 'Rocky Balboa', disponivel: true},
    {name: 'Wallysson', disponivel: true}
  ]
  
 setProfissional(profissional : any){
  this.profissionalSelected = profissional;
 }
  
 getProfissional(){
  return this.profissionalSelected;
 }
}
