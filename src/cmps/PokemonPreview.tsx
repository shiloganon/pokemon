import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import pokeBall from '../imgs/PokeBall.png'
import { setPokemon } from '../store/store'
import { IpropsPokemon, Pokemon } from '../types/interfaces'

const Card = styled.section`
background-color: #b6b3b355;
border: 1px solid white;
width: 200px;
height: 200px;
cursor: pointer;
text-align: center;
border-radius: 5px;

a{
    all: unset;

    &:hover{
    font-size: 20px;
    }

    p{
        background-color: unset;
        margin-top: 5px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    img{
        width: 100%;
        max-height: 75%;
    }
}

@media (max-width: 768px) {
    width: 90%;
    height: 25%;
    margin: 0 auto 15px auto;

    p{
        margin: 10px 0;
    }
  }
`


export const PokemonPreview: React.FC<IpropsPokemon> = ({ pokemon }) => {
    const dispatch = useDispatch()

    const saveCurrPokemon = (pokemon: Pokemon) => {
        dispatch(setPokemon(pokemon))
    }

    return (
        <Card>
            <Link onClick={() => saveCurrPokemon(pokemon)} to='/details'>
                <img src={pokeBall} alt="#" />
                <p>{pokemon.name}</p>
            </Link>
        </Card>
    )
}
