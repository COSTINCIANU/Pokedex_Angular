export interface Pokemon {
  id: number;
  name: string;
  picture: string;
  life: number;
  domage: number;
  types: [string, string?, string?];
  created: Date;
}

export type PokemonList = Pokemon[];
