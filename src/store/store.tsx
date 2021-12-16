import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Istate, Pokemon } from "../types/interfaces";


const initialState: Istate = {
    currPokemon: null,
    pokemonsToShow: []
}

export const pokemonSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setPokemon: (state, action: PayloadAction<Pokemon>) => {
            state.currPokemon = action.payload
        },

        setPokemonsToShow: (state, action: PayloadAction<Pokemon[]>) => {
            state.pokemonsToShow = action.payload
        }
    }
})

export const { setPokemon, setPokemonsToShow } = pokemonSlice.actions

const store = configureStore({
    reducer: {
        pokemon: pokemonSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export const selectPokemon = (state: RootState) => state.pokemon

export default store 