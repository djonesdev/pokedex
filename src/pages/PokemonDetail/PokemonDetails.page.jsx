import React from 'react'

import PokemonDetailsView from './PokemonDetail'

export default function PokemonDetails({ selectedPokemon }) {
    return (
        <div>
            <PokemonDetailsView selectedPokemon={selectedPokemon} />
        </div>
    )
}
