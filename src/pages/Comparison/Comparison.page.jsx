import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { 
  getPokemonByGeneration,
  getPokemonDetailsForComparison, 
  removeFromComparisonPokemon, 
  getAllPokemon,
} from 'redux/actions'
import { selectPokemon, selectComparisonState, selectFavourites } from 'redux/selectors'
import ComparisonView from './Comparison'

function Comparison(props) {
  const { getAllPokemon, removeFromComparisonPokemon, getPokemonDetailsForComparison, pokemon, pokemonForComparison } = props

  useEffect(() => {
    getAllPokemon()
  }, [getAllPokemon])

  
  const onClickDropDownItem = (newComparisonPokemon, index) => {
      getPokemonDetailsForComparison(newComparisonPokemon.name)
  }

  const removePokemon = (id) => {
    removeFromComparisonPokemon(id)
  }

    return (
      <ComparisonView  
        onClickDropDownItem={onClickDropDownItem} 
        pokemonForComparison={pokemonForComparison}
        pokemonDropDownData={pokemon.result}
        removePokemon={removePokemon}
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
  removeFromComparisonPokemon: id => dispatch(removeFromComparisonPokemon(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Comparison)