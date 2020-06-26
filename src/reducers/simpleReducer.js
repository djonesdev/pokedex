export default (state = {}, action) => {
    switch (action.type) {
     case 'SIMPLE_ACTION':
      return {
       result: action.payload
      }
      case 'GET_POKEMON':
        return {
         result: action.payload
        }
      case 'GET_POKEMON_SUCCESS':
        return {
         result: action.payload
        }
     default:
      return state
    }
   }