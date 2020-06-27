import React from 'react'
import { Table } from 'reactstrap';

export default function PokemonDetailView({ selectedPokemon }) {
    if(!selectedPokemon) return null
    return (
        <div>
            <p>{selectedPokemon.name}</p>
            {Object.keys(selectedPokemon.sprites).map(function(key, index) {
                return <img src={selectedPokemon.sprites[key]} />
            })}
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

        </div>
    )
}
