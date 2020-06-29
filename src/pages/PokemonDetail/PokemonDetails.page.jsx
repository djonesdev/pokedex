import React from 'react'
import { connect } from 'react-redux'

import PokemonDetailsView from './PokemonDetail'
import { selectSelectedPokemon, selectLoadingState } from '../../selectors/selectPokemon'
import { 
    getPokemonDetails,
    addToFavourites 
  } from '../../actions/simpleAction'

function PokemonDetails({ selectedPokemon, isLoading, addToFavourites, state }) {
    console.log(state, 'state')
    return (
        <div>
            <PokemonDetailsView selectedPokemon={selectedPokemon} addToFavourites={addToFavourites} isLoading={isLoading}/>
        </div>
    )
}

const mapStateToProps = state => ({
    selectedPokemon: selectSelectedPokemon(state),
    isLoading: selectLoadingState(state), 
    state
})

const mapDispatchToProps = dispatch => ({
    addToFavourites: pokemon => dispatch(addToFavourites(pokemon)),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails);
