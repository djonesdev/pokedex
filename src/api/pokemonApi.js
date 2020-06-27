import axios from 'axios'

export default {
    getPokemon: (isNextPage) => {
        const url = isNextPage ? isNextPage.result.next : `https://pokeapi.co/api/v2/pokemon`
        return axios({
            url: url,
            method: 'GET', 
        })
    },
    getPokemonDetails: (detailsUrl) => {
        return axios({
            url: detailsUrl,
            method: 'GET', 
        })
    }
}