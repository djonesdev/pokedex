import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

export default function FavouritesView({ favouritePokemon, removeFromFavourites }) {
    return (
        <Grid>
        <Grid fluid>
            <Row>
                {favouritePokemon.map(pokemon => 
                    <Col xs={3}>
                        <div>
                            <img src={pokemon.sprite}/>
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


