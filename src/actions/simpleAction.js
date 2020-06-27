import { getPokemonAction, getPokemonDetailsAction } from './actionTypes'

export const getPokemon = (isNextPage) => ({ type: getPokemonAction, payload: isNextPage })

export const getPokemonDetails = (payload) => ({ type: getPokemonDetailsAction, payload })