import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap';

import BarChart from '../../components/StatsChart/StatsChart'
import { selectFavourites } from '../../selectors/selectPokemon'
import SearchDropDown from '../../components/SearchableDropDown/SearchDropDown'
import { 
  getPokemon, 
  getPokemonByGeneration,
  getPokemonDetailsForComparison, 
} from '../../actions/simpleAction'
import { selectPokemon, selectComparisonState } from '../../selectors/selectPokemon'

function Comparison(props) {
  const [pokemonNames, setPokemonNames] = useState([])
  const [poekmonStats, setPokemonStats] = useState()
  const [comparisonPokemon, setComparisonPokemon] = useState([])

  useEffect(() => {
    props.getPokemon()
  }, [getPokemon])

  // useEffect(() => {
  //   props.getPokemonDetailsForComparison(comparisonPokemon[0])
  //   console.log('useEffect called!')
  // }, [getPokemonDetailsForComparison, comparisonPokemon])
  
  useEffect(() => {
    if(props.pokemon.result) {
      const namesArray = props.pokemon.result.map(pokemon => pokemon.name)
      setPokemonNames(namesArray)
    }
  }, [props.pokemon.result])

  const onClickDropDownItem = (newComparisonPokemon) => {
    console.log(newComparisonPokemon, 'newComparison')
    props.getPokemonDetailsForComparison(newComparisonPokemon.name)
    setComparisonPokemon(props.pokemonForComparison.pokemonForComparison)
  }

  const firstPokemonStats = props.pokemonForComparison.map(pokemon => pokemon.stats)
  const firstPokemonBaseStats = firstPokemonStats[0] && firstPokemonStats[0].map(stat => stat.base_stat)
  const seconodPokemonBaseStats = firstPokemonStats[1] && firstPokemonStats[1].map(stat => stat.base_stat)

  const dataset1 = firstPokemonStats.map(stat => stat.base_stat)
  const dataset2 = [23, 23, 2, 14, 5, 11, 23, 3, 9]
  if(props.pokemonForComparison) {
    props.pokemonForComparison.map(pokemon => pokemon.stats.map(stat => stat.base_stat))
  }

  const dropDownDisabled = props.pokemonForComparison.length >= 2
  const firstPokemonName = props.pokemonForComparison[0] && props.pokemonForComparison[0].name

  console.log(seconodPokemonBaseStats, 'dataset1')

    return (
      <Container>
        <Row xs="3">
          <Col>
            <SearchDropDown 
              placeholder="Search for pokemon here" 
              disabled={dropDownDisabled} 
              onClick={onClickDropDownItem} 
              items={props.pokemon.result}
            />
          </Col>
          <Col>
            <SearchDropDown 
              placeholder="Search for pokemon here" 
              disabled={dropDownDisabled} 
              onClick={onClickDropDownItem} 
              items={props.pokemon.result}
            />
          </Col>
        </Row> 
        <Row xs="2">
          {props.pokemonForComparison[0] && <Col>
            <img alt={'pokemonSprite'} src={props.pokemonForComparison[0].sprites.front_default} />
            <p>{props.pokemonForComparison[0] && props.pokemonForComparison[0].name}</p>
            <BarChart data={firstPokemonBaseStats} />
          </Col>}
          {props.pokemonForComparison[1] && <Col>
            <img alt={props.pokemonForComparison[1]} src={props.pokemonForComparison[1].sprites.front_default} />
            <p>{props.pokemonForComparison[1] && props.pokemonForComparison[1].name}</p>
            <BarChart data={seconodPokemonBaseStats} />
          </Col>}
        </Row>
      </Container> 
    )
}

const mapStateToProps = state => ({
    favouritePokemon: selectFavourites(state),
    pokemon: selectPokemon(state),
    pokemonForComparison: selectComparisonState(state),
    state, 
})

const mapDispatchToProps = dispatch => ({
  getPokemon: () => dispatch(getPokemon()),
  getPokemonDetailsForComparison: pokemonName => dispatch(getPokemonDetailsForComparison(pokemonName)),
  getPokemonByGeneration: generationId => dispatch(getPokemonByGeneration(2)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Comparison)