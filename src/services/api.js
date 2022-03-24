import axios from "axios";

const BASE_URL = process.env.REACT_APP_PUBLIC_URL
  ? process.env.REACT_APP_PUBLIC_URL
  : "http://localhost:5000";

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function getPosts(config) {
  return axios.get(`${BASE_URL}/posts`, config);
}

function getLikes() {
  return axios.get(`${BASE_URL}/like`);
}

function postLikeOrNot(idPost, userId) {
  console.log(idPost);
  return axios.post(`${BASE_URL}/like/${idPost}`, { userId }); // lembrar que só o auth é suficiente
}

const api = {
  getPosts,
  getLikes,
  postLikeOrNot,
};

export default api;
