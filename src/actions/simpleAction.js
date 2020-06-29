import { 
    getPokemonAction, 
    getPokemonDetailsAction, 
    getNextPokemonPageAction, 
    getPreviousPokemonPageAction,
    addToFavouritesAction, 
    removeFromFavouritesAction 
} from './actionTypes'

export const getPokemon = isNextPage => ({ type: getPokemonAction, payload: isNextPage })

export const getNextPokemonPage = () => ({ type: getNextPokemonPageAction })

export const getPreviousPokemonPage = () => ({ type: getPreviousPokemonPageAction })

export const getPokemonDetails = payload => ({ type: getPokemonDetailsAction, payload })

export const addToFavourites = pokemon => ({ type: addToFavouritesAction, payload: pokemon})

export const removeFromFavourites = pokemonIndex => ({ type: removeFromFavouritesAction, payload: pokemonIndex})