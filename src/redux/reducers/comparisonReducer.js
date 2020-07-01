const pokemonInitialState = {
    pokemonForComparison: [],
  }
  
  export default (state = pokemonInitialState, action) => {
    switch (action.type) {
    case 'REMOVE_POKEMON_FOR_COMPARISON':
      return {
        ...state,
        pokemonForComparison: state.pokemonForComparison.filter(pokemon => pokemon.id !== action.id)
      }
    case 'GET_POKEMON_DETAILS_FOR_COMPARISON':
      return {
        ...state,
        isLoading: true
      }
    case 'GET_POKEMON_DETAILS_FOR_COMPARISON_SUCCESS':
      return {
        ...state,
        pokemonForComparison: [...state.pokemonForComparison, action.payload],
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