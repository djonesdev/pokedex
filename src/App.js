import React, { Component } from 'react'
import { connect } from 'react-redux'

import { InfoCard, Header } from './components'
import './App.css';
import { getPokemon } from './actions/simpleAction';

class App extends Component {
  simpleAction = (event) => {
    this.props.simpleAction();
  }

 render() {
  return (
   <div className="App">
    <pre>
 {
  JSON.stringify(this.props)
 }
</pre>
    <button onClick={this.simpleAction}>Test redux action</button>
    <InfoCard />
   </div>
  );
 }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
 simpleAction: () => dispatch(getPokemon())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);