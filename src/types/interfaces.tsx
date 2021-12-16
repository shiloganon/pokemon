export interface Pokemon {
    name: string,
    url: string
}

export interface PokemonData {
    name: string,
    height: number,
    weight: number,
    id: number,
    img: string
}

export interface IpropsPokemons {
    pokemonsToShow: Pokemon[]
}

export interface IpropsPokemon {
    pokemon: Pokemon
}

export interface Istate {
    currPokemon: Pokemon | null
    pokemonsToShow:Pokemon[]
}