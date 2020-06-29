export const selectPokemon = state => state.pokemon

export const selectNextPokemonPageUrl = state => state.pokemon.nextUrl

export const selectPreviousPokemonPageUrl = state => state.pokemon.previousUrl

export const selectSelectedPokemon = state => state.pokemon.selectedPokemon

export const selectLoadingState = state => state.pokemon.loading

export const selectFavourites = state => state.pokemon.favouritePokemon