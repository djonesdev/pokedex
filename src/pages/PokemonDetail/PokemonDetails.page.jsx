import React from 'react'
import { connect } from 'react-redux'

import PokemonDetailsView from './PokemonDetail'
import { selectSelectedPokemon, selectLoadingState } from '../../selectors/selectPokemon'
import { 
    getPokemonDetails,
    addToFavourites 
  } from '../../actions/simpleAction'

function PokemonDetails({ selectedPokemon, isLoading, addToFavourites }) {
    return (
        <div>
            <PokemonDetailsView selectedPokemon={selectedPokemon} addToFavourites={addToFavourites} isLoading={isLoading}/>
        </div>
    )
}

const mapStateToProps = state => ({
    selectedPokemon: selectSelectedPokemon(state),
    isLoading: selectLoadingState(state), 
})

const mapDispatchToProps = dispatch => ({
    addToFavourites: pokemon => dispatch(addToFavourites(pokemon)),
    getPokemonDetails: id => dispatch(getPokemonDetails(id))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails);
