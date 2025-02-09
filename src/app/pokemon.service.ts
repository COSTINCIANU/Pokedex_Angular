import { Injectable } from '@angular/core';
import { PokemonList, Pokemon } from './pokemon.model';
import { POKEMON_LIST } from './pokemon-list';


//! comme ça il est dipo par tout dans l'application
@Injectable({
  providedIn: 'root'
})

// ! Pas dispo par tout
// @Injectable()



export class PokemonService {

  // ! Liste de pokemon
  getPokemonList(): PokemonList {
      return POKEMON_LIST;
  }

  // ! On recupre un pokemon via son ID
  getPokemonById(id: number): Pokemon {
      const pokemon = POKEMON_LIST.find(pokemon => pokemon.id === id);

      if(!pokemon) {
        throw new Error('No Pokemon found with id ${id}');
      }

      return pokemon;
  }


  // ! Et on récoupére la liste de pokemons
  getPokemonTypeList(): string[] {
      return  [
        'Plante',
        'Feu',
        'Eau',
        'Insecte',
        'Normal',
        'Electrik',
        'Poison',
        'Fée',
        'Vol',
      ];
  }
}
