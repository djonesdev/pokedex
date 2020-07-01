import { 
    getPokemonAction, 
    getPokemonDetailsAction, 
    getNextPokemonPageAction, 
    getPreviousPokemonPageAction,
    addToFavouritesAction, 
    removeFromFavouritesAction, 
    getPokemonByGenerationAction, 
    getPokemonDetailsForComparisonAction, 
    removeFromComparisonPokemonAction, 
    getAllPokemonAction
} from './actionTypes'

export const getPokemon = () => ({ type: getPokemonAction })

export const getAllPokemon = () => ({ type: getAllPokemonAction })

export const getPokemonByGeneration = generationId => ({ type: getPokemonByGenerationAction, generationId })

export const getNextPokemonPage = () => ({ type: getNextPokemonPageAction })

export const getPreviousPokemonPage = () => ({ type: getPreviousPokemonPageAction })

export const getPokemonDetails = payload => ({ type: getPokemonDetailsAction, payload })

export const addToFavourites = pokemon => ({ type: addToFavouritesAction, payload: pokemon})

export const removeFromFavourites = pokemonIndex => ({ type: removeFromFavouritesAction, payload: pokemonIndex})

export const removeFromComparisonPokemon = id => ({ type: removeFromComparisonPokemonAction, id })

export const getPokemonDetailsForComparison = pokemonName => ({ type: getPokemonDetailsForComparisonAction, pokemonName })