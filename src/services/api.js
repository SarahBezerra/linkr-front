import axios from "axios";

const BASE_URL = process.env.REACT_APP_PUBLIC_URL ? process.env.REACT_APP_PUBLIC_URL : 'http://localhost:5000';

function getPosts(config) {
    return axios.get(`${BASE_URL}/posts`, config);
}

function postSignUp(signUpData) {
    return axios.post(`${BASE_URL}/sign-up`, signUpData);
}

function postSignIn(signInData) {
    return axios.post(`${BASE_URL}/sign-in`, signInData);
}

const api = {
    getPosts,
    postSignUp,
    postSignIn
}


export default api;