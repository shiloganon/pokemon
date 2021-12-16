import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootState } from '../store/store'
import { Pokemon } from '../types/interfaces'
import { PokemonPreview } from './PokemonPreview'


const CardContainer = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 10px;
margin-top: 2%;

@media (max-width: 768px) {
    display: block;
    width: 100%;
}`


export const PokemonList: React.FC = () => {

    const pokemons: Pokemon[] = useSelector((state: RootState) => state.pokemon.pokemonsToShow)

    return (
        <CardContainer>
            {
                pokemons && pokemons.map((pokemon: Pokemon, idx: number) => (
                    <article key={idx}>
                        <PokemonPreview pokemon={pokemon} />
                    </article>
                ))
            }
        </CardContainer>
    )
}