const pokemonInitialState = {
  result: [], 
  isLoading: false, 
  selectedPokemon: {
    sprites: [], 
    abilities: [],
    moves: [],
  },
  favouritePokemon: [],
}

export default (state = pokemonInitialState, action) => {
    switch (action.type) {
      case 'GET_POKEMON':
        return {
          ...state,
         isLoading: true
        }
      case 'GET_POKEMON_SUCCESS':
        return {
          ...state,
          result: action.payload,
          isLoading: false
        }
      case 'GET_POKEMON_FAILED':
        return {
            ...state,
           result: action.payload,
           isLoading: false
        }
        case 'GET_POKEMON_PREVIOUS_PAGE':
        case 'GET_POKEMON_NEXT_PAGE':
          return {
            ...state,
           isLoading: true
          }
        case 'GET_POKEMON_PREVIOUS_PAGE_SUCCESS':
        case 'GET_POKEMON_NEXT_PAGE_SUCCESS':
          return {
            ...state,
            result: action.payload,
            isLoading: false
          }
        case 'GET_POKEMON_PREVIOUS_PAGE_FAILED':
        case 'GET_POKEMON_NEXT_PAGE_FAILED':
          return {
              ...state,
             result: action.payload,
             isLoading: false
          }
        case 'GET_POKEMON_DETAILS':
          return {
            ...state,
            isLoading: true
          }
      case 'GET_POKEMON_DETAILS_SUCCESS':
        return {
          ...state,
          selectedPokemon: action.payload,
          isLoading: false
        }
        case 'GET_POKEMON_DETAILS_FAILED':
          return {
            ...state,
            isLoading: false
          }
        case 'ADD_TO_FAVOURITES':
          return {
            ...state, 
            favouritePokemon: [ ...state.favouritePokemon, action.payload]
          }
     default:
      return state
    }
   }