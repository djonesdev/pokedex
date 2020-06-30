import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import StatsChart2 from '../../components/StatsChart/StatsChart2'
import { selectFavourites } from '../../selectors/selectPokemon'
import { 
  getPokemon, 
  getPokemonByGeneration,
  getPokemonDetailsForComparison, 
  removeFromComparisonPokemon, 
  getAllPokemon,
} from '../../actions/simpleAction'
import { selectPokemon, selectComparisonState } from '../../selectors/selectPokemon'
import ComparisonView from './Comparison'

function Comparison(props) {

  const[pokemonForComparison, setPokemonForComparison] = useState([])

  useEffect(() => {
    props.getAllPokemon()
  }, [getAllPokemon])

  useEffect(() => {
    setPokemonForComparison([ ...props.pokemonForComparison ])
  }, [props.pokemonForComparison])
  
  const onClickDropDownItem = (newComparisonPokemon, index) => {
    if(pokemonForComparison.length >= 2) {
      const filteredPokemon = pokemonForComparison.filter(pokemon => pokemon.name !== pokemonForComparison[index].name)
      props.removeFromComparisonPokemon(filteredPokemon, newComparisonPokemon)
    } else {
      alert('in the right bit')
      props.getPokemonDetailsForComparison(newComparisonPokemon.name)
    }
  }

  const isDropDownDisabled = props.pokemonForComparison.length >= 2
    return (
      <ComparisonView 
        dropDownDisabled={isDropDownDisabled} 
        onClickDropDownItem={onClickDropDownItem} 
        pokemonForComparison={props.pokemonForComparison}
        pokemonDropDownData={props.pokemon.result}
      />
    )
}

const mapStateToProps = state => ({
    favouritePokemon: selectFavourites(state),
    pokemon: selectPokemon(state),
    pokemonForComparison: selectComparisonState(state),
})

const mapDispatchToProps = dispatch => ({
  getAllPokemon: () => dispatch(getAllPokemon()),
  getPokemonDetailsForComparison: pokemonName => dispatch(getPokemonDetailsForComparison(pokemonName)),
  getPokemonByGeneration: generationId => dispatch(getPokemonByGeneration(2)),
  removeFromComparisonPokemon: (filteredPokemon, newPokemon) => dispatch(removeFromComparisonPokemon(filteredPokemon, newPokemon))
})

export default connect(mapStateToProps, mapDispatchToProps)(Comparison)