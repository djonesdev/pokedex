import { 
    getPokemonAction, 
    getPokemonDetailsAction, 
    getNextPokemonPageAction, 
    getPreviousPokemonPageAction,
    addToFavouritesAction 
} from './actionTypes'

export const getPokemon = (isNextPage) => ({ type: getPokemonAction, payload: isNextPage })

export const getNextPokemonPage = () => ({ type: getNextPokemonPageAction })

export const getPreviousPokemonPage = () => ({ type: getPreviousPokemonPageAction })

export const getPokemonDetails = (payload) => ({ type: getPokemonDetailsAction, payload })

export const addToFavourites = (pokemon) => ({ type: addToFavouritesAction, payload: pokemon})