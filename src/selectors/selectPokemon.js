export const selectPokemon = (state) => state.pokemon

export const selectNextPokemonPageUrl = (state) => state.pokemon.result.next

export const selectPreviousPokemonPageUrl = (state) => state.pokemon.result.previous

export const selectSelectedPokemon = (state) => state.pokemon.selectedPokemon

export const selectLoadingState = (state) => state.pokemon.loading