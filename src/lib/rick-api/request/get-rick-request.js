import axios from "axios";

export const getRickRequest = (url) => {
    return axios(url, {
        method: 'GET'
    });
};