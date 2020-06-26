import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import { Header, InfoCard } from '../components';
import theme from '../styles/colors'


export const routing = (
  <Router>
    <ThemeProvider theme={theme}>
    <div>
      <Header />      
      <hr />
      <Switch>
        <Route exact path="/" component={InfoCard} />
        <Route path="/users" component={InfoCard} />
        <Route path="/contact" component={InfoCard} />
        <Route component={InfoCard} />
      </Switch>  
    </div>
    </ThemeProvider>
  </Router>
);