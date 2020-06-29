import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'

import InfoCard from '../../components/InfoCard'
import { 
  getPokemon, 
  getPokemonDetails, 
  getNextPokemonPage, 
  getPreviousPokemonPage 
} from '../../actions/simpleAction'
import { selectSelectedPokemon } from '../../selectors/selectPokemon'

const HomePageButton = styled.button`
  margin: 30px;
  font-size: 18px;
  height: 65px;
  width: 250px;
  border-radius: 12px;
  border: none;
  box-shadow: 1px 1px 0px 2px rgba (0,0,0,0.3);
  background: rgb(141,217,252);
  cursor: pointer;
`

function Home(props) {
  const getPokemon = (isNextPage) => {
    props.getPokemon(isNextPage);
  }

  return (
    <div>
      <HomePageButton onClick={() => getPokemon(false)}>Get Pokemon!</HomePageButton>
      <div className="App">
        <Grid fluid>
          <Row>
            {props.pokemon.result  && props.pokemon.result.results && 
              props.pokemon.result.results.map(pokemon => 
                <Col xs={3}>
                  <InfoCard key={pokemon.name} name={pokemon.name} onClick={props.getPokemonDetails} url={pokemon.url}/>
                </Col>
            )}
          </Row>
        </Grid>
      </div>
      {props.pokemon.result  && <HomePageButton onClick={props.getNextPokemonPage}>Get next 20 Pokemon!</HomePageButton>}
      {props.pokemon.result  && <HomePageButton onClick={props.getPreviousPokemonPage}>Get previous 20 Pokemon!</HomePageButton>}
    </div>
  );  
}

const mapStateToProps = state => ({
  ...state,
  pokemon: state.pokemon,
  selectedPokemon: selectSelectedPokemon(state)
})

const mapDispatchToProps = dispatch => ({
  getPokemon: isNextPage => dispatch(getPokemon(isNextPage)),
  getNextPokemonPage: () => dispatch(getNextPokemonPage()),
  getPreviousPokemonPage: () => dispatch(getPreviousPokemonPage()),
  getPokemonDetails: url => dispatch(getPokemonDetails(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);