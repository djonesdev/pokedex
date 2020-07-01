import React from 'react'
import { Grid, Row } from 'react-flexbox-grid'
import styled from 'styled-components'

import config from 'config'

const FavouriteCard = styled.div`
    text-align: center;
    margin: 5%;
    color: black;
    :hover {
        cursor: pointer;
        opacity: 0.2;
        border-radius: 12px;
        text-dercoration: none;
    }
`

const FavouriteContainer = styled.div`
    text-align: center;
    margin: 5%;
    :hover {
        cursor: pointer;
        text-dercoration: none;
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
                        <FavouriteContainer  key={index}>
                            <FavouriteCard onClick={() => onClickFavourite(`${config.baseUrl}/pokemon/${pokemon.name}`, pokemon.name)}>
                                <img alt={pokemon.name} src={pokemon.sprite} />
                                <p className="capitalize">{pokemon.name}</p>
                            </FavouriteCard>
                            <button className='destructive' onClick={() => removeFromFavourites(favouritePokemon.indexOf(pokemon))}>Remove From Favourites</button>
                        </FavouriteContainer>
                    )}
                </Row>
            </Grid>
        </Grid>
    )
}


