import { getPokemonAction } from './actionTypes'

export const getPokemon = () => ({ type: getPokemonAction, payload: 'result_of_pokemon_action' })