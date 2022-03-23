import axios from "axios";

const BASE_URL = "http://localhost:5000";

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

async function getLikes() {
  return axios.get(`${BASE_URL}/like`);
}

async function postLikeOrNot(idPost) {
  return axios.post(`${BASE_URL}/like/1`, { userId: 1 }); // lembrar que só o auth é suficiente
}

const api = { postLikeOrNot, getLikes };

export default api;
