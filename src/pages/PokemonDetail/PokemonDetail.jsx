import React from 'react'

export default function PokemonDetailView({ selectedPokemon }) {
    if(!selectedPokemon) return null
    return (
        <div>
            <p>{selectedPokemon.name}</p>
        </div>
    )
}
