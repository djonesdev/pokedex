import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'
import { Spinner } from 'reactstrap'

import InfoCard from '../../components/InfoCard'
import { 
  getPokemon, 
  getPokemonByGeneration,
  getPokemonDetails, 
  getNextPokemonPage, 
  getPreviousPokemonPage, 
} from '../../actions/simpleAction'
import { selectSelectedPokemon, selectLoadingState, selectPokemon } from '../../selectors/selectPokemon'

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

const PokemonListContainer = styled.div`
  text-align: center;
  width: 98%;
`

const NextPageButtonContainer = styled.div`
  margin-top: 100px;
`

const renderGenerationButtons = (getPokemonByGeneration) => {
  let container = []
  for (let i = 0; i < 7; i++) {
    let children = []
    children.push(<HomePageButton key={i} onClick={() => getPokemonByGeneration(i + 1)}>{`Gen ${i + 1}`}</HomePageButton>)
    container.push(children)
  }
  return container
}

function Home(props) {
  const { getPokemon, getPokemonByGeneration } = props
  const hasAvaliableNextPage = props.pokemon.nextUrl
  const hasAvailablePreviousPage = props.pokemon.previousUrl

  return (
    <div>
      <PokemonListContainer>
        <HomePageButton onClick={() => getPokemon()}>Get First 20 Pokemon!</HomePageButton>
        {renderGenerationButtons(getPokemonByGeneration)}
        <Grid fluid>
          <Row>
            {props.isLoading ? <Spinner style={{ width: '3rem', height: '3rem', margin: 'auto', padding: 10 }} type="grow" />: props.pokemon.result  && props.pokemon.result && 
              props.pokemon.result.map((pokemon, index) => 
                <Col xs={12} sm={3} key={index}>
                  <InfoCard index={index} name={pokemon.name} onClick={props.getPokemonDetails} url={pokemon.url}/>
                </Col>
            )}
          </Row>
          <Row>
        <Col xs={1} sm={3}>
            <NextPageButtonContainer>
              {hasAvaliableNextPage  && <HomePageButton onClick={props.getNextPokemonPage}>Get next page of Pokemon!</HomePageButton>}
              {hasAvailablePreviousPage  && <HomePageButton onClick={props.getPreviousPokemonPage}>Get previous page of Pokemon!</HomePageButton>}
            </NextPageButtonContainer>
          </Col>
          </Row>
        </Grid>
      </PokemonListContainer>
    </div>
  );  
}

const mapStateToProps = state => ({
  state: state.pokemon,
  isLoading: selectLoadingState(state), 
  pokemon: selectPokemon(state),
  selectedPokemon: selectSelectedPokemon(state)
})

const mapDispatchToProps = dispatch => ({
  getPokemon: () => dispatch(getPokemon()),
  getPokemonByGeneration: generationId => dispatch(getPokemonByGeneration(generationId)),
  getNextPokemonPage: () => dispatch(getNextPokemonPage()),
  getPreviousPokemonPage: () => dispatch(getPreviousPokemonPage()),
  getPokemonDetails: url => dispatch(getPokemonDetails(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);