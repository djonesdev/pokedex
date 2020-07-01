import { combineReducers } from 'redux'
import pokemon from './pokemonReducer'
import comparison from './comparisonReducer'

export default combineReducers({
 pokemon, 
 comparison
});