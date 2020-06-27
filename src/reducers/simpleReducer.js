export default (state = {}, action) => {
    switch (action.type) {
      case 'GET_POKEMON':
        return {
          ...state,
         loading: true
        }
      case 'GET_POKEMON_SUCCESS':
        return {
          ...state,
          result: action.payload,
          loading: false
        }
      case 'GET_POKEMON_FAILED':
        return {
            ...state,
           result: action.payload,
           loading: false
        }
        case 'GET_POKEMON_PREVIOUS_PAGE':
        case 'GET_POKEMON_NEXT_PAGE':
          return {
            ...state,
           loading: true
          }
        case 'GET_POKEMON_PREVIOUS_PAGE_SUCCESS':
        case 'GET_POKEMON_NEXT_PAGE_SUCCESS':
          return {
            ...state,
            result: action.payload,
            loading: false
          }
        case 'GET_POKEMON_PREVIOUS_PAGE_FAILED':
        case 'GET_POKEMON_NEXT_PAGE_FAILED':
          return {
              ...state,
             result: action.payload,
             loading: false
          }
        case 'GET_POKEMON_DETAILS':
          return {
            ...state,
            loading: true
          }
      case 'GET_POKEMON_DETAILS_SUCCESS':
        return {
          ...state,
          selectedPokemon: action.payload,
          loading: false
        }
        case 'GET_POKEMON_DETAILS_FAILED':
          return {
            ...state,
            loading: false
          }
     default:
      return state
    }
   }