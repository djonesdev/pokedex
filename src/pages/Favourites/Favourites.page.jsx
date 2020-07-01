import React from 'react'
import { connect } from 'react-redux'

import FavouritesView from './Favourites'
import { selectFavourites } from 'redux/selectors'
import { removeFromFavourites, getPokemonDetails } from 'redux/actions'


function Favourites({ favouritePokemon, removeFromFavourites, getPokemonDetails, history }) {
 
    const onClickFavourite = (url, name) => {
        getPokemonDetails(url)
        history.push(`detail/${name}`)
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
