import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PokemonserviceService {
  private http = inject(HttpClient);
  private apiurl = 'http://localhost:3000/api/pokemon';

  pokemonList = signal<any[]>([]);

  fetchPokemon(){
    this.http.get<any[]>(this.apiurl).subscribe(data => this.pokemonList.set(data))
  }

  savePokemon(data: any){
    return this.http.post(this.apiurl, data);
  }
}
