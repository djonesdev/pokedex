import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Routing } from './routes/Route'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <Routing store={store} />,
  document.getElementById('root')
);
