import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

export default function FavouritesView({ favouritePokemon }) {
    return (
        <Grid>
        <Grid fluid>
            <Row>
                {favouritePokemon.map(pokemon => 
                    <Col xs={3}>
                        <div>
                            <img src={pokemon.sprite}/>
                            <p>{pokemon.name}</p>
                            <button className='destructive'>Remove From Favourites</button>
                        </div>
                    </Col>
                )}
            </Row>
        </Grid>
        </Grid>
    )
}


