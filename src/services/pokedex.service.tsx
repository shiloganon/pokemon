import axios from 'axios'
import { Pokemon, PokemonData } from '../types/interfaces'


export const PokedexService = {
    getPokemonsList,
    getPokemon,
    filter
}

async function getPokemonsList(amount: number): Promise<Pokemon[]> {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${amount}&limit=50`)
    return data.results
}

async function getPokemon(url: string): Promise<PokemonData> {
    const { data } = await axios.get(url)

    const pokemon: PokemonData = {
        name: data.name,
        height: data.height,
        weight: data.weight,
        id: data.id,
        img: data.sprites.front_shiny
    }

    return pokemon
}

async function filter(str: string): Promise<Pokemon[]> {
    const allPokemons = await _getAllPokemons()

    const regex = new RegExp(str, 'i')
    const pokemons = allPokemons.filter((p: Pokemon) => regex.test(p.name))
    return pokemons
}

async function _getAllPokemons(): Promise<Pokemon[]> {
    if (_loadFromStorage('allPokemons')) return _loadFromStorage('allPokemons')

    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
    const { count } = data
    const allPokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${count}`)

    _saveToStorage('allPokemons', allPokemons.data.results)
    return allPokemons.data.results
}

function _saveToStorage(key: string, data: any) {
    var json = JSON.stringify(data);
    localStorage.setItem(key, json)
}

function _loadFromStorage(key: string) {
    var json: any = localStorage.getItem(key)
    var data = JSON.parse(json)
    return data;
}