import React from 'react'
import { connect } from 'react-redux'

import FavouritesView from './Favourites'
import { selectFavourites } from '../../selectors/selectPokemon'
import { removeFromFavourites } from '../../actions/simpleAction'

function Favourites({ favouritePokemon, removeFromFavourites }) {
    return (
        <div>
            <FavouritesView favouritePokemon={favouritePokemon} removeFromFavourites={removeFromFavourites} />
        </div>
    )
}

const mapStateToProps = state => ({
    favouritePokemon: selectFavourites(state),
})

const mapDispatchToProps = dispatch => ({
    removeFromFavourites: pokemonIndex => dispatch(removeFromFavourites(pokemonIndex))
})

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)
