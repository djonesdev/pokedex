import React from 'react'
import { connect } from 'react-redux'

import FavouritesView from './Favourites'
import { selectFavourites } from '../../selectors/selectPokemon'
import { removeFromFavourites } from '../../actions/simpleAction'
import {  getPokemonDetails } from '../../actions/simpleAction'

function Favourites({ favouritePokemon, removeFromFavourites, getPokemonDetails, history }) {

    const onClickFavourite = (url) => {
        getPokemonDetails(url)
        history.push('/detail'); 
    }

    return (
        <div>
            <FavouritesView 
                favouritePokemon={favouritePokemon} 
                onClickFavourite={onClickFavourite}
                removeFromFavourites={removeFromFavourites} 
                getPokemonDetails={getPokemonDetails}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    favouritePokemon: selectFavourites(state),
})

const mapDispatchToProps = dispatch => ({
    removeFromFavourites: pokemonIndex => dispatch(removeFromFavourites(pokemonIndex)),
    getPokemonDetails: url => dispatch(getPokemonDetails(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)
