import axios from 'axios'

export default {
    getPokemon: (payload) => {
        const url = `https://pokeapi.co/api/v2/pokemon/ditto`
        return axios({
            url: url,
            method: 'GET', 
            data: payload
        })
    }
}