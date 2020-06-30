import React from 'react'
import { Table } from 'reactstrap'
import { Spinner, Row, Col, Container } from 'reactstrap'
import styled from 'styled-components'

import Icons from '../../styles/icons'

const MarginedDiv = styled.div`
    margin-top: 5%;
`

const TypeImage = styled.img`
    height: 5%;
    width 10%;
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

export default function PokemonDetailView({ selectedPokemon, isLoading, addToFavourites }) {
    if(isLoading) return ( 
        <Container>
            <Spinner style={{ width: '3rem', height: '3rem', margin: 'auto', padding: 10 }} type="grow" />
        </Container>
    )
    //TODO: redirect or call detailsfrom routeParams
    if(!selectedPokemon) return null

    return (
        <Container>
            <MarginedDiv>
                <h2 className="capitalize">{selectedPokemon.name}</h2>
                {selectedPokemon.types.map(typeDetails => <TypeImage src={Icons[`${typeDetails.type.name}Type`]} />)}
            </MarginedDiv>
            <MarginedDiv>
                <FavouritesButton 
                    onClick={() => addToFavourites({ 
                            name: selectedPokemon.name, 
                            sprite: selectedPokemon.sprites.front_default, 
                            id: selectedPokemon.id 
                        }
                    )}
                >
                    Add To Favourties
                </FavouritesButton>
            </MarginedDiv>
            <MarginedDiv>
                <Row around="xs">
                    {Object.keys(selectedPokemon.sprites).map(function(key, index) {
                        if(selectedPokemon.sprites[key]) {
                                return (
                                    <Col xs={2} key={key}>
                                        <img alt={key} src={selectedPokemon.sprites[key]} />
                                    </Col>
                                )
                        }
                    })}
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
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    )
}
