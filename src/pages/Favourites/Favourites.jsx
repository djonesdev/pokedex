import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'
import { Link } from "react-router-dom"

import config from '../../config'

const FavouriteContainer = styled(Link)`
    text-align: center;
    margin: 5%;
    :hover {
        cursor: pointer;
        background: #99a19b;
        opacity: 0.2;
        border-radius: 12px;
    }
`

const FavouritesFallBackView = () => (
    <Grid>
        <h3>You have no saved favourites! Add your favourite Pokemon here!</h3>
    </Grid>
)

export default function FavouritesView({ favouritePokemon, removeFromFavourites, onClickFavourite }) {
    if (!favouritePokemon.length) return <FavouritesFallBackView />
    return (
        <Grid>
        <Grid fluid>
            <Row>
                {favouritePokemon.map((pokemon, index) => 
                    <FavouriteContainer key={index} onClick={() => onClickFavourite(`${config.baseUrl}/pokemon/${pokemon.name}`)}>
                        <img alt={pokemon.name} src={pokemon.sprite} />
                        <p className="capitalize">{pokemon.name}</p>
                        <button className='destructive' onClick={() => removeFromFavourites(favouritePokemon.indexOf(pokemon))}>Remove From Favourites</button>
                    </FavouriteContainer>
                )}
            </Row>
        </Grid>
        </Grid>
    )
}


