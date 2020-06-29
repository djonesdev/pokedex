import { combineReducers } from 'redux'
import pokemon from './simpleReducer'
import comparison from './comparisonReducer'

export default combineReducers({
 pokemon, 
 comparison
});