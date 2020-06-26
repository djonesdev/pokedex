import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/rootReducer'
import rootSaga from './sagas/sagas'

const sagaMiddleware = createSagaMiddleware()
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga);



export default store


// const sagaMiddleware = createSagaMiddleware();

// export default function configureStore(initialState={}) {
//   const Store = createStore(
//     rootReducer,
//     applyMiddleware(sagaMiddleware)
//   );
//  // use the same saga middleware that you have enhanced your store with
//  sagaMiddleware.run(rootSaga);
//   return Store;
// }

// sagaMiddleware.run(rootSaga);