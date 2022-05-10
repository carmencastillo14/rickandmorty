
import axios from "axios";

export const getRickandMortyRequest = () => {
    return axios('https://rickandmortyapi.com/api/character',{
        method: 'GET'
    });
};