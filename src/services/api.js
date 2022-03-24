import axios from "axios";

const BASE_URL = process.env.REACT_APP_PUBLIC_URL ? process.env.REACT_APP_PUBLIC_URL : 'http://localhost:5000';

function getPosts(config) {
    return axios.get(`${BASE_URL}/posts`, config);
}

function postSignUp(signUpData) {
    return axios.post(`${BASE_URL}/sign-up`, signUpData);
}

const api = {
    getPosts,
    postSignUp
}


export default api;