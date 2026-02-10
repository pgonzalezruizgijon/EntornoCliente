import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public pokemons:any;
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getPokemonAll();
  }

  getPokemonAll() {
    this.apiService
    .getPokemons()
    .subscribe(resp => {
      this.pokemons = resp;
      console.log("~ file: home.component.ts ~ line 22 ~ HomeComponent ~ getPokemonAll ~ this.pokemons", this.pokemons)
    });
  }

  getMore(url:string) {
    this.apiService
    .getByUrl(url)
    .subscribe( (resp:any) => {
      this.pokemons.results = [... this.pokemons.results, ... resp.results]; // Partiendo de un array añade otro array
      this.pokemons.next = resp.next;
    });
  }

}
