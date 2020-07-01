import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import PokemonDetails from '../pages/PokemonDetail/PokemonDetails.page'
import { Provider } from 'react-redux'

import { Header } from '../components'
import HomePage from '../pages/Home/Home.page'
import Favourites from '../pages/Favourites/Favourites.page'
import Comparison from '../pages/Comparison/Comparison.page'

export const Routing = ({ store }) => (
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