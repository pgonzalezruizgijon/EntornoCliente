import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getByUrl(url:string){
    return this.http.get(url);
  }

  public getPokemons(){
    return this.http.get(`${environment.PokeApiBase}/pokemon`);
  }

  public getPokemonByName(name:string) {
    return this.http.get(`${environment.PokeApiBase}/pokemon/${name}`);
  }

}
