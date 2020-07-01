import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Header } from 'components'
import { PokemonDetails, HomePage, Favourites, Comparison } from 'pages'

export const Routing = ({ store, location }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />      
        <hr />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/detail/:name" component={PokemonDetails} />
          <Route path="/favourites" component={Favourites} />
          <Route path="/compare" component={Comparison} />
        </Switch>  
      </div>
    </Router>
  </Provider>
)