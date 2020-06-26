import { takeLatest, put } from 'redux-saga/effects'
import pokemonApi from '../api/pokemonApi'
import { getPokemonFailedAction, getPokemonSuccessAction } from '../actions/actionTypes'

export function* helloSaga() {
  yield console.log('Hello Sagas!')
}


export function* getPokemon() {
  try {
    const pokemon = yield pokemonApi.getPokemon()
    console.log(JSON.stringify(pokemon))
    yield put({ type: getPokemonSuccessAction, payload: pokemon.data })
  }
  catch (error) {
    yield put({ type: getPokemonFailedAction, error })
  }
}

export default function* rootSaga() {
  yield takeLatest('GET_POKEMON', getPokemon)
}

