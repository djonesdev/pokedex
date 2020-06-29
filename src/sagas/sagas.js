import { takeLatest, put, select } from 'redux-saga/effects'
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
  getPokemonByGenerationAction, 
  getPokemonByGenerationFailedAction, 
  getPokemonByGenerationSuccessAction
} from '../actions/actionTypes'
import { selectNextPokemonPageUrl, selectPreviousPokemonPageUrl } from '../selectors/selectPokemon' 

export function* getPokemon() {
  try {
    const pokemon = yield pokemonApi.getPokemon()
    console.log(pokemon.data, 'get pokemon')
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
    console.log(pokemon.data.pokemon_species, 'generation pokemon')
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

export function* getPokemonDetails(actionPayload) {
  const { payload } = actionPayload
  try {
    const pokemonDetails = yield pokemonApi.getPokemonDetails(payload)
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
}

