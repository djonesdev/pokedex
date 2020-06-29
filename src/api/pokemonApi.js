import axios from 'axios'

import config from '../config'

export default {
    getPokemon: () => {
        return axios({
            url: `${config.baseUrl}/pokemon`,
            method: 'GET', 
        })
    },
    getPokemonByGeneration: generationId => {
        return axios({
            url: `${config.baseUrl}/generation/${generationId}`,
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