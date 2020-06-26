import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'
import App from './App'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Header, InfoCard } from './components';


ReactDOM.render(
 <Provider store={store}>
    <Router>
    <div>
      <Header />      
      <hr />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={InfoCard} />
        <Route path="/contact" component={InfoCard} />
        <Route component={InfoCard} />
      </Switch>   
    </div>
  </Router>
 </Provider>,
 document.getElementById('root')
);
