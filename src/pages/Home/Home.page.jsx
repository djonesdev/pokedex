import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid';

import InfoCard from '../../components/InfoCard'
import { getPokemon, getPokemonDetails } from '../../actions/simpleAction';
import PokemonDetails from '../PokemonDetail/PokemonDetails.page';
import { getSelectedPokemon } from '../../selectors/selectPokemon';

function Home(props) {
  const getPokemon = (isNextPage) => {
    props.getPokemon(isNextPage);
  }

  console.log(props.selectedPokemon, 'selectedPokemon')

  return (
    <div>
      <button onClick={() => getPokemon(false)}>Get Pokemon!</button>
      <div className="App">
        <Grid fluid>
          <Row>
            {props.pokemon.result  && props.pokemon.result.results && 
              props.pokemon.result.results.map(pokemon => 
                <Col xs>
                  <InfoCard key={pokemon.name} name={pokemon.name} onClick={props.getPokemonDetails} url={pokemon.url}/>
                </Col>
            )}
          </Row>
        </Grid>
      </div>
      {props.pokemon.result  && <button onClick={() => getPokemon(true)}>Get next 20 Pokemon!</button>}
      {props.pokemon.result  && <button onClick={() => getPokemon(true)}>Get previous 20 Pokemon!</button>}
      <PokemonDetails selectedPokemon={props.selectedPokemon}/>
    </div>
  );  
}

const mapStateToProps = state => ({
  ...state,
  pokemon: state.pokemon,
  selectedPokemon: getSelectedPokemon(state)
})

const mapDispatchToProps = dispatch => ({
 getPokemon: isNextPage => dispatch(getPokemon(isNextPage)),
 getPokemonDetails: url => dispatch(getPokemonDetails(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);