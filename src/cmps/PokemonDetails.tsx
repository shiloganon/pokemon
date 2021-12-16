import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { PokedexService } from '../services/pokedex.service'
import { RootState } from '../store/store'
import { Pokemon, PokemonData } from '../types/interfaces'


const Container = styled.section`
    width: 500px;
    text-align: center;
    background-color: red;
    border: 1px solid white;
    border-radius: 20px;
    border: 1px solid black;

    position: absolute;
    top: 50%; right: 50%;
    transform: translate(50%,-50%);

    aside{
        display: flex;
        max-width: 70%;
        margin: 20px auto;
        border-radius: 15px;
        gap: 10px;
        background-color: unset;
        span{
            background-color: white;
            border-radius: 15px;
            flex: 1;
            color: black;
            padding: 10px;
            border: 2px solid black;
        }

        button{
            all: unset;
            border: 2px solid black;
            background-color: white;
            color: black;
            padding: 5px;
            border-radius: 15px;
            cursor: pointer;

            transition: 0.3s;
            &:hover{
                transition: 0.3s;
                color: red;
            }
        }
    }

        h1{
            background-color: unset;
            margin-bottom: 25px;
        }

`

const ImgContainet = styled.article`
    /* margin-top: 35px; */
    width: 70%;
    height: 250px;
    border: 1px solid white;
    margin: 25px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-color: white;
    border: 2px solid black;
    img{
        width: 70%;
        background-color: unset;
    }
 
`

const ButtonContainer = styled.article`
    background-color: unset;
    margin: 25px 0;
    display: flex;
    justify-content: space-around;
    button{
        all: unset;
        border: 2px solid black;
        cursor: pointer;
        padding: 15px 35px;
        border-radius: 15px;
        background-color: white;
        color: black;

        transition: 0.3s;
        &:hover{
            transition: 0.3s;
            color: red;
        }
    }
`

const UserMsg = styled.article`
    padding: 20px;
    max-width: 80%;
    margin: 10px auto 0 auto;
    background-color: #f44336d1;
    color: white;
    text-align: center;
`


export const PokemonDetails: React.FC = () => {

    const history = useHistory<unknown>()
    const [isUserMsg, setisUserMsg] = useState(false)
    const [details, setDetails] = useState<null | PokemonData>(null)

    const currPokemon: Pokemon | null = useSelector((state: RootState) => state.pokemon.currPokemon)

    useEffect((): void => {

        (async () => {
            if (!currPokemon) return history.push('/')
            const pokemonData: PokemonData = await PokedexService.getPokemon(currPokemon.url)
            setDetails(pokemonData)
        })();

    }, [])




    const moveTo = (str: string) => {
        setisUserMsg(true)
        setTimeout(() => setisUserMsg(false), 3000);
    }

    if (!details) return <div>Loading...</div>
    return (
        <>
            <Container>
                <aside>
                    <button onClick={() => history.push('/')}>Go back</button>
                    <span>{details.name}</span>
                </aside>
                <ImgContainet>
                    <img src={details.img} alt={details.name} />
                </ImgContainet>


                <ButtonContainer>
                    <button onClick={() => moveTo('prev')}>Prev</button>
                    <button onClick={() => moveTo('next')}>Next</button>
                </ButtonContainer>
                <h1>Pokedex</h1>
            </Container>

            {isUserMsg && <UserMsg>Coming soon...</UserMsg>}
        </>
    )
}
