export default (state = {}, action) => {
    switch (action.type) {
     case 'SIMPLE_ACTION':
      return {
       result: action.payload
      }
      case 'GET_POKEMON_SUCCESS':
        return {
          ...state,
         result: action.payload,
        }
      case 'GET_POKEMON_DETAILS_SUCCESS':
        return {
          ...state,
          selectedPokemon: action.payload,
        }
     default:
      return state
    }
   }