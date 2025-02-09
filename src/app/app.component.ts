//! import { signal } from '@angular/core';
import { Component, computed, effect , inject, signal } from '@angular/core';
// import { POKEMON_LIST } from './pokemon-list';
import { Pokemon, PokemonList } from './pokemon.model';
import { PokemonBorderDirective } from './pokemon-border.directive';
import { DatePipe } from '@angular/common';
// import { ReversePipe } from './reverse.pipe';
import { PokemonService } from './pokemon.service';





@Component({
  selector: 'app-root',
  // ReversePipe
  imports: [PokemonBorderDirective, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // providers: [PokemonService],
  // disponible que ici sion on veux utiliser dans un
  // autre service cela sera une autre instance de PokemonService mais pas cela.
})



export class AppComponent {
  //! on injecte le service qui passe obligatoirement par la class avant tout
  //? On peux faire commen ça :  constructor(private readonly pokemonService : PokemonService) {}
  // ! ou commme ça
  readonly #pokemonService = inject(PokemonService);
  readonly pokemonList = signal(this.#pokemonService.getPokemonList());
  readonly searchTerm = signal('');

  // ! Affiche une sous liste des pokemon filtre avec l'etat derive avec computed()
  readonly pokemonListFiltered = computed(() => {
    const searchTerm =  this.searchTerm();
    const pokemonList = this.pokemonList();

    // on returen la liste de pokemon filtre en fonction de nom que soit en majouscule ou minuscule
    // l'space avec trim on consider que si il y'a ça ne pas valide
    return pokemonList.filter(pokemon =>
      pokemon.name.toLocaleLowerCase().includes(searchTerm.trim().toLocaleLowerCase())
    );
  });

  size(pokemon: Pokemon) {
      if(pokemon.life < 15) {
        return 'Petit';
      }
      if(pokemon.life > 25) {
        return 'Grand';
      }
      return 'Moyenne';
  };

//! Effect et signal
  // constructor() {
  //   effect(() => {
  //     console.log('Le compteur a été mis à jour :', this.counter());
  //   });
  // }


  incrementLife(pokemon: Pokemon) {
     pokemon.life = pokemon.life + 1;
    // this.life.update((life) => life + 1);
    // this.life =  this.life ++;
    //? this.counter.update(n => n + 1);
  }

  decrementLife(pokemon: Pokemon) {
    pokemon.life = pokemon.life - 1;
    // this.life =  this.life - 1;
    // this.life.update((life) => life - 1);
  }

  //! Reset
  //  resete() {
  // this.counter.set(0);
  // }
  //

  // ! Signal

  //! Création d'un signal
  //? const compteur = signal(0);

  //!Accés à la valeur du signal
  //? console.log(compteur()); // 0

  //! Modification de la valeur du signal
  //? compteur.set(1);
  //? console.log(compteur()); // 1

  //! Mise à jour de la valeur du signal
  //? compteur.update(n => n + 1);
  //? console.log(compteur()); //2

}
