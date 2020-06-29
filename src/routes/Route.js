import React from 'react'
import { Switch, Route, BrowserRouter as Router, useParams } from 'react-router-dom'
import PokemonDetails from '../pages/PokemonDetail/PokemonDetails.page'
import { Provider } from 'react-redux'

import { Header, InfoCard } from '../components'
import HomePage from '../pages/Home/Home.page'
import Favourites from '../pages/Favourites/Favourites.page'

function Details() {  
  let { name } = useParams();
  return <div>Now showing post ds</div>;
}


export const Routing = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />      
        <hr />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/users" component={Details} />
          <Route path="/detail" component={PokemonDetails} />
          <Route path="/favourites" component={Favourites} />
          <Route path="/signIn" component={Details} />
        </Switch>  
      </div>
    </Router>
  </Provider>
);