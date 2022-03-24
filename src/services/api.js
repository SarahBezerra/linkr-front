<<<<<<< HEAD
import axios from 'axios';
const BASE_URL = 'http://localhost:5000';

function createConfig(token) {
    return { headers: { Authorization: `Bearer ${token}` } };
  }

async function sendPost(token, body){
    const config = createConfig(token);
    const promise = await axios.post(`${BASE_URL}/post`,body,config);
    return promise
}

const api = {
    createConfig,
    sendPost
}

export default api;

=======
import axios from "axios";

const BASE_URL = process.env.REACT_APP_PUBLIC_URL ? process.env.REACT_APP_PUBLIC_URL : 'http://localhost:5000';

function getPosts(config) {
    return axios.get(`${BASE_URL}/posts`, config);
}



const api = {
    getPosts,
}


export default api;
>>>>>>> bbfb1ec7f153c8fb761e2a4c3ac61e4d9982e7d3
