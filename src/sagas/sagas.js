import { takeLatest, put, select } from 'redux-saga/effects'

import config from '../config'
import pokemonApi from '../api/pokemonApi'
import { 
  getPokemonFailedAction, 
  getPokemonSuccessAction, 
  getPokemonDetailsSuccessAction, 
  getPokemonDetailsFailedAction,
  getNextPokemonSuccessPageAction,
  getNextPokemonFailedPageAction, 
  getPreviousPokemonPageFailedAction, 
  getPreviousPokemonPageSuccessAction,  
  getPokemonByGenerationFailedAction, 
  getPokemonByGenerationSuccessAction, 
  getPokemonDetailsForComparisonSuccessAction, 
  getPokemonDetailsForComparisonFailedAction
} from '../actions/actionTypes'
import { selectNextPokemonPageUrl, selectPreviousPokemonPageUrl } from '../selectors/selectPokemon' 

export function* getPokemon() {
  try {
    const pokemon = yield pokemonApi.getPokemon()
    yield put({ type: getPokemonSuccessAction, payload: pokemon.data })
  }
  catch (error) {
    yield put({ type: getPokemonFailedAction, error })
    console.log(error)
  }
}

export function* getNextPaginatedPokemon() {
  const url = yield select(selectNextPokemonPageUrl)
  try {
    const pokemon = yield pokemonApi.getPokemonPaginatedPage(url)
    yield put({ type: getNextPokemonSuccessPageAction, payload: pokemon.data })
  }
  catch (error) {
    yield put({ type: getNextPokemonFailedPageAction, error })
    console.log(error)
  }
}

export function* getPokemonByGeneration(payload) {
  const { generationId } = payload 
  try {
    const pokemon = yield pokemonApi.getPokemonByGeneration(generationId)
    yield put({ type: getPokemonByGenerationSuccessAction, payload: pokemon.data.pokemon_species })
  }
  catch (error) {
    yield put({ type: getPokemonByGenerationFailedAction, error })
    console.log(error)
  }
}

export function* getPreviousPaginatedPokemon() {
  const url = yield select(selectPreviousPokemonPageUrl)
  try {
    const pokemon = yield pokemonApi.getPokemonPaginatedPage(url)
    yield put({ type: getPreviousPokemonPageSuccessAction, payload: pokemon.data })
  }
  catch (error) {
    yield put({ type: getPreviousPokemonPageFailedAction, error })
    console.log(error)
  }
}

export function* getPokemonStatForComparison(payload) {
  payload.pokemonName && console.log('saga 1', JSON.stringify(payload.pokemonName))
  const url = payload.pokemonName && `${config.baseUrl}/pokemon/${payload.pokemonName}`
  console.log('saga 2', url)
  try {
    console.log('saga try 1')
    const pokemon = yield pokemonApi.getPokemonDetails(url)
    console.log('saga try 2')
    yield put({ type: getPokemonDetailsForComparisonSuccessAction, payload: pokemon.data })
    console.log('saga try 3')
  }
  catch (error) {
    console.log('saga catch 1')
    yield put({ type: getPokemonDetailsForComparisonFailedAction, error })
    console.log('saga catch 2')
    console.log(error)
  }
}

export function* getPokemonDetails(actionPayload) {
  const { payload } = actionPayload
  let detailsUrl = ''
  try {
    // I'm not a fan of this, but for some reason the details url provided when filtering by generation goes to /pokemon-species/:id and doesn't contain sprites
    // But when calling all pokemon the detail url provided (/pokemon/:id) does
    if(payload.includes('pokemon-species')) {
      const pokemonId = payload.split("pokemon-species/").pop()
      detailsUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    } else {
      detailsUrl = payload
    }
    const pokemonDetails = yield pokemonApi.getPokemonDetails(detailsUrl)
    if(!pokemonDetails.id) console.log('no id for some reasons')
    yield put({ type: getPokemonDetailsSuccessAction, payload: pokemonDetails.data })
  }
  catch (error) {
    yield put({ type: getPokemonDetailsFailedAction, error })
    console.log(error)
  }
}

export default function* rootSaga() {
  yield takeLatest('GET_POKEMON', getPokemon)
  yield takeLatest('GET_POKEMON_GENERATION', getPokemonByGeneration)
  yield takeLatest('GET_POKEMON_NEXT_PAGE', getNextPaginatedPokemon)
  yield takeLatest('GET_POKEMON_PREVIOUS_PAGE', getPreviousPaginatedPokemon)
  yield takeLatest('GET_POKEMON_DETAILS', getPokemonDetails)
  yield takeLatest('GET_POKEMON_DETAILS_FOR_COMPARISON', getPokemonStatForComparison)
}

