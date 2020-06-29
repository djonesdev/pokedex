import React from 'react'
import { connect } from 'react-redux'

import FavouritesView from './Favourites'
import { selectFavourites } from '../../selectors/selectPokemon'

function Favourites({ favouritePokemon }) {
    console.log(favouritePokemon, 'favouritePokemon')
    return (
        <div>
            <FavouritesView favouritePokemon={favouritePokemon} />
        </div>
    )
}

const mapStateToProps = state => ({
    favouritePokemon: selectFavourites(state),
    state
})

const mapDispatchToProps = dispatch => ({
    // addToFavourites: pokemon => dispatch(addToFavourites(pokemon)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)
