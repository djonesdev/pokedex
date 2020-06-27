import React from 'react'
import { connect } from 'react-redux'

import PokemonDetailsView from './PokemonDetail'
import { selectSelectedPokemon, selectLoadingState } from '../../selectors/selectPokemon';

function PokemonDetails({ selectedPokemon, loading }) {
    if(loading) return <p>loader</p>
    return (
        <div>
            <PokemonDetailsView selectedPokemon={selectedPokemon} />
        </div>
    )
}

const mapStateToProps = state => ({
    selectedPokemon: selectSelectedPokemon(state),
    loading: selectLoadingState(state)
})
  
export default connect(mapStateToProps, null)(PokemonDetails);
