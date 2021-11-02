import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }
//Esta funcion es de tipo observable que retorna un arreglo de Heroes(interface)
  getHeroes():Observable<Heroe[]> {
    //le ponemos return para que retorne un observable que retorna un arreglo de Heroes  y dice Fernando que los observables tienen mucho mas control que las promesas
   //recuerde que <Heroes> es una interfaces
    return this.http.get<Heroe[]>('http://localhost:3000/heroes')

  }
}
