import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

const FavouritesFallBackView = () => (
    <Grid>
        <h3>You have no saved favourites! Add your favourite Pokemon here!</h3>
    </Grid>
)

export default function FavouritesView({ favouritePokemon, removeFromFavourites }) {
    if (!favouritePokemon.length) return ( <FavouritesFallBackView /> )
    return (
        <Grid>
        <Grid fluid>
            <Row>
                {favouritePokemon.map(pokemon => 
                    <Col xs={3}>
                        <div>
                            <img alt={pokemon.name} src={pokemon.sprite}/>
                            <p>{pokemon.name}</p>
                            <button className='destructive' onClick={() => removeFromFavourites(favouritePokemon.indexOf(pokemon))}>Remove From Favourites</button>
                        </div>
                    </Col>
                )}
            </Row>
        </Grid>
        </Grid>
    )
}


