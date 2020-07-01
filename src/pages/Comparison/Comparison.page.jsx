import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { selectFavourites } from '../../selectors/selectPokemon'
import { 
  getPokemonByGeneration,
  getPokemonDetailsForComparison, 
  removeFromComparisonPokemon, 
  getAllPokemon,
} from '../../actions/simpleAction'
import { selectPokemon, selectComparisonState } from '../../selectors/selectPokemon'
import ComparisonView from './Comparison'

function Comparison(props) {
  const { getAllPokemon, removeFromComparisonPokemon, getPokemonDetailsForComparison, pokemon, pokemonForComparison } = props

  useEffect(() => {
    getAllPokemon()
  }, [getAllPokemon])

  
  const onClickDropDownItem = (newComparisonPokemon, index) => {
    if(pokemonForComparison.length >= 2) {
      const filteredPokemon = pokemonForComparison.filter(pokemon => pokemon.name !== pokemonForComparison[index].name)
      removeFromComparisonPokemon(filteredPokemon, newComparisonPokemon)
    } else {
      getPokemonDetailsForComparison(newComparisonPokemon.name)
    }
  }

    return (
      <ComparisonView  
        onClickDropDownItem={onClickDropDownItem} 
        pokemonForComparison={pokemonForComparison}
        pokemonDropDownData={pokemon.result}
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