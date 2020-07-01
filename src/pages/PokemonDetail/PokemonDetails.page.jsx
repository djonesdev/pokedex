import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import PokemonDetailsView from './PokemonDetail'
import { selectSelectedPokemon, selectLoadingState, selectFavourites } from 'redux/selectors'
import { 
    getPokemonDetails,
    addToFavourites 
  } from 'redux/actions'

function PokemonDetails({ selectedPokemon, isLoading, addToFavourites, favouritePokemon, match, location }) {

    useEffect(() => {
        getPokemonDetails(match.params.name)
    }, [match.params.name])

    const isFavourite = favouritePokemon.some(pokemon => pokemon.id === selectedPokemon.id)
    return (
        <div>
            <PokemonDetailsView 
                selectedPokemon={selectedPokemon} 
                addToFavourites={addToFavourites} 
                isFavourite={isFavourite}
                isLoading={isLoading}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    selectedPokemon: selectSelectedPokemon(state),
    favouritePokemon: selectFavourites(state), 
    isLoading: selectLoadingState(state), 
    state,
})

const mapDispatchToProps = dispatch => ({
    addToFavourites: pokemon => dispatch(addToFavourites(pokemon)),
    getPokemonDetails: id => dispatch(getPokemonDetails(id))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails);
