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

