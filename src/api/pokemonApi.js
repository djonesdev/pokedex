import axios from 'axios'

export default {
    getPokemon: () => {
        return axios({
            url: `https://pokeapi.co/api/v2/pokemon`,
            method: 'GET', 
        })
    },
    getPokemonByGeneration: generationId => {
        return axios({
            url: `https://pokeapi.co/api/v2/generation/${generationId}`,
            method: 'GET', 
        })
    },
    getPokemonPaginatedPage: pagniatedUrl => {
        return axios({
            url: pagniatedUrl,
            method: 'GET', 
        })
    },
    getPokemonDetails: detailsUrl => {
        return axios({
            url: detailsUrl,
            method: 'GET', 
        })
    }
}