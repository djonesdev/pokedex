import React from 'react'
import { Table } from 'reactstrap'
import { Spinner, Row, Col, Container } from 'reactstrap'
import styled from 'styled-components'

import Icons from 'styles/icons'

const MarginedDiv = styled.div`
    margin-top: 5%;
`

const TypeImage = styled.img`
    height: 5%;
    width 10%;
`

const FavouritesStar = styled.img`
    height: 3%;
    width 5%;
    margin-bottom: 1px;
`

const FavouritesButton = styled.button`
    font-size: 18px;
    height: 65px;
    width: 250px;
    border-radius: 12px;
    border: none;
    box-shadow: 1px 1px 0px 2px rgba (0,0,0,0.3);
    background: #3B4CCA;
    cursor: pointer;
    :hover {
        background: #16065e;
        color: white;
    }
`

export default function PokemonDetailView({ selectedPokemon, isLoading, addToFavourites, isFavourite }) {
    if(isLoading) return ( 
        <Container>
            <Spinner style={{ width: '3rem', height: '3rem', margin: 'auto', padding: 10 }} type="grow" />
        </Container>
    )
    return (
        <Container>
            <MarginedDiv>
                <Row>
                    <h2 className="capitalize">{selectedPokemon.name}</h2>
                    {isFavourite && <FavouritesStar src={Icons.favouriteStar}/>}
                </Row>
            </MarginedDiv>
                {selectedPokemon.types.map((typeDetails, index) => <TypeImage key={index} src={Icons[`${typeDetails.type.name}Type`]} />)}
            <MarginedDiv>
                {!isFavourite && <FavouritesButton 
                    disabled={isFavourite}
                    onClick={() => addToFavourites({ 
                            name: selectedPokemon.name, 
                            sprite: selectedPokemon.sprites.front_default, 
                            id: selectedPokemon.id 
                        }
                    )}
                >
                    Add To Favourties
                </FavouritesButton>}
            </MarginedDiv>
            <MarginedDiv>
                <Row around="xs">
                    {Object.keys(selectedPokemon.sprites).map((key, index)  => (
                        selectedPokemon.sprites[key] && 
                            <Col xs={2} key={index}>
                                <img alt='pokemonSprite' src={selectedPokemon.sprites[key]} />
                            </Col>
                        )
                    )}
                </Row>
            </MarginedDiv>
            <h4>Abilities</h4>
            <Row>
                {selectedPokemon.abilities.map((abilityList, index) => 
                    <div style={{ margin: 30 }} key={index}>
                        <p className="capitalize">{abilityList.ability.name}</p>
                    </div>
                )}
            </Row>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Move List</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedPokemon.moves.map((move, index) => 
                        <tr key={index}>
                            <td>{move.move.name}</td>     
                            <td>{move.version_group_details[0].level_learned_at}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    )
}
