import { takeLatest, put, select } from 'redux-saga/effects'
import pokemonApi from '../api/pokemonApi'
import { getPokemonFailedAction, getPokemonSuccessAction, getPokemonDetailsSuccessAction, getPokemonDetailsFailedAction } from '../actions/actionTypes'
import { getNextPokemonPage, getSelectedPokemon } from '../selectors/selectPokemon' 

export function* helloSaga() {
  yield console.log('Hello Sagas!')
}


export function* getPokemon(actionPayload) {
  const { payload } = actionPayload
  const yay = yield select(getNextPokemonPage)
  try {
    const nextPageUrl = payload ? yay : null
    const pokemon = yield pokemonApi.getPokemon(nextPageUrl)
    yield put({ type: getPokemonSuccessAction, payload: pokemon.data })
  }
  catch (error) {
    yield put({ type: getPokemonFailedAction, error })
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
  yield takeLatest('GET_POKEMON_DETAILS', getPokemonDetails)
}

