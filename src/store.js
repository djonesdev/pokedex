import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/rootReducer'
import rootSaga from './sagas/sagas'
import { loadStateFromLocalStorage, saveStateToLocalStorage } from './localStorage'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const localStorageState = loadStateFromLocalStorage()

const store = createStore(
  rootReducer, localStorageState, composeEnhancers(applyMiddleware(sagaMiddleware))
)

// Only want to save the favourites state for now
// TODO: only fire this function when actions that modify favourites are fired. 
store.subscribe(() => {
  saveStateToLocalStorage({ 
    pokemon: store.getState().pokemon 
  })
})

sagaMiddleware.run(rootSaga);



export default store
