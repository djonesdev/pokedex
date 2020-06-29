import React from 'react'
import { Table } from 'reactstrap';
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Spinner } from 'reactstrap'

export default function PokemonDetailView({ selectedPokemon, isLoading, addToFavourites }) {
    if(isLoading) return <Grid><Spinner style={{ width: '3rem', height: '3rem', margin: 'auto', padding: 10 }} type="grow" /></Grid>
    if(!selectedPokemon) return null
    return (
        <Grid>
            <p>{selectedPokemon.name}</p>
            <button onClick={() => addToFavourites({ name: selectedPokemon.name, sprite: selectedPokemon.sprites.front_default, id: selectedPokemon.id })}>Add To Favourties</button>
            <Row around="xs">
                {Object.keys(selectedPokemon.sprites).map(function(key, index) {
                    return <Col xs={1}><img alt={selectedPokemon.name} src={selectedPokemon.sprites[key]} /></Col>
                })}
            </Row>

            {selectedPokemon.abilities.map(abilityList => 
                <div style={{ margin: 30 }}>
                    <p>{abilityList.ability.name}</p>
                </div>
            )}
            <Table responsive>
                <thead>
                    <tr>
                        <th>Move List</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {selectedPokemon.moves.map(move => 
                            <tr>
                                <td>{move.move.name}</td>
                            </tr>
                        )}
                    </tr>
                </tbody>
            </Table>

        </Grid>
    )
}
