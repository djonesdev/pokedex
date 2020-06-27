import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import { Routing } from './routes/Route'
import App from './App'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Header, InfoCard } from './components';
import store from './store'


ReactDOM.render(
  <Routing store={store} />,
  document.getElementById('root')
);
