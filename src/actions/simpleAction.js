import { 
    getPokemonAction, 
    getPokemonDetailsAction, 
    getNextPokemonPageAction, 
    getPreviousPokemonPageAction,
    addToFavouritesAction, 
    removeFromFavouritesAction, 
    getPokemonByGenerationAction, 
    getPokemonDetailsForComparisonAction
} from './actionTypes'

export const getPokemon = () => ({ type: getPokemonAction })

export const getPokemonByGeneration = generationId => ({ type: getPokemonByGenerationAction, generationId })

export const getNextPokemonPage = () => ({ type: getNextPokemonPageAction })

export const getPreviousPokemonPage = () => ({ type: getPreviousPokemonPageAction })

export const getPokemonDetails = payload => ({ type: getPokemonDetailsAction, payload })

export const addToFavourites = pokemon => ({ type: addToFavouritesAction, payload: pokemon})

export const removeFromFavourites = pokemonIndex => ({ type: removeFromFavouritesAction, payload: pokemonIndex})

export const getPokemonDetailsForComparison = pokemonName => ({ type: getPokemonDetailsForComparisonAction, pokemonName })