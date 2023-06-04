import axios from "axios";

//Base da URL
/* URL_BASE = 'https://api.themoviedb.org/3/';
API_KEY = 'acc52bd1b22703336fe1f82c94a4c2d9'; */

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;

