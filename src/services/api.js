import axios from 'axios';
const BASE_URL = process.env.REACT_APP_PUBLIC_URL ? process.env.REACT_APP_PUBLIC_URL : 'http://localhost:5000';

function createConfig(token) {
    return { headers: { Authorization: `Bearer ${token}` } };
  }

async function sendPost(token, body){
    const config = createConfig(token);
    const promise = await axios.post(`${BASE_URL}/posts`,body,config);
    return promise
}

function getPosts(config) {
    return axios.get(`${BASE_URL}/posts`, config);
}

const api = {
    createConfig,
    getPosts,
    sendPost
}

export default api;

