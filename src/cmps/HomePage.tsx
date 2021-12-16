import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { PokedexService } from '../services/pokedex.service'
import { setPokemonsToShow } from '../store/store'
import { Pokemon } from '../types/interfaces'
import { PokemonList } from './PokemonList'


const Input = styled.input`
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;

    display: flex;
    margin: 2% auto;
`



const Container = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;

    button{
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color .3s;
    border: 1px solid #ddd;
    cursor: pointer;
    margin: 0 10px;
    text-transform: uppercase;

    &:hover{
        background-color: #949393bc;
     }
     
    }
`


export const HomePage: React.FC = () => {

    const [page, setPage] = useState<number>(1)
    const dispatch = useDispatch()

    useEffect((): void => {

        (async () => {
            const amountPokemons: number = 50 * page
            const pokemonsList = await PokedexService.getPokemonsList(amountPokemons)

            if (!pokemonsList.length) return setPage(1)
            dispatch(setPokemonsToShow(pokemonsList))
        })();

    }, [page])

    const changePage = (str: string): void => {
        if (str === 'next') setPage(page + 1)
        else if (page > 1) setPage(page - 1)
    }

    const filterByName = async (ev: any): Promise<void> => {
        const value: string = ev.target.value
        const pokemonsFiltered: Pokemon[] = await PokedexService.filter(value)
        dispatch(setPokemonsToShow(pokemonsFiltered))
    }

    return (
        <>
            <Input onChange={filterByName} placeholder='Search' type="text" />

            <Container>
                <button onClick={() => changePage('prev')}>&laquo; Prev page </button>
                <h3>{page}</h3>
                <button onClick={() => changePage('next')}>Next page &raquo;</button>
            </Container>

            <PokemonList />
        </>
    )
}

