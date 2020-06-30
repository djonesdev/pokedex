const pokemonInitialState = {
    pokemonForComparison: [],
  }
  
  export default (state = pokemonInitialState, action) => {
     switch (action.type) {
            case 'REMOVE_POKEMON_FOR_COMPARISON':
              return {
                ...state,
                pokemonForComparison: action.payload.filteredPokemon
              }
              case 'GET_POKEMON_DETAILS_FOR_COMPARISON':
                return {
                  ...state,
                  isLoading: true
                }
          case 'GET_POKEMON_DETAILS_FOR_COMPARISON_SUCCESS':
            let newComparisonPokemon = action.payload
            if(state.pokemonForComparison.includes(undefined)) {
              console.log(state.pokemonForComparison.indexOf(undefined), 'newComparison')
              newComparisonPokemon = state.pokemonForComparison.splice(state.pokemonForComparison.indexOf(undefined), 1, action.payload)
            }
            return {
              ...state,
              pokemonForComparison: [...state.pokemonForComparison, newComparisonPokemon],
              isLoading: false
            }
            case 'GET_POKEMON_DETAILS_FOR_COMPARISON_FAILED':
              return {
                ...state,
                isLoading: false
              }
       default:
        return state
      }
     }