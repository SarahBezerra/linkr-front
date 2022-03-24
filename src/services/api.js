import axios from "axios";

const BASE_URL = process.env.REACT_APP_PUBLIC_URL ? process.env.REACT_APP_PUBLIC_URL : 'http://localhost:5000';

function getPosts(config) {
    return axios.get(`${BASE_URL}/posts`, config);
}



const api = {
    getPosts,
}


export default api;