import axios from "axios";

const BASE_URL = process.env.REACT_APP_PUBLIC_URL
  ? process.env.REACT_APP_PUBLIC_URL
  : "http://localhost:5000";

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function postSignUp(signUpData) {
  return axios.post(`${BASE_URL}/sign-up`, signUpData);
}

function postSignIn(signInData) {
  return axios.post(`${BASE_URL}/sign-in`, signInData);
}

async function sendPost(token, body) {
  const config = createConfig(token);
  const promise = await axios.post(`${BASE_URL}/posts`, body, config);
  return promise;
}

function getPosts(config) {
  return axios.get(`${BASE_URL}/posts`, config);
}

function getLikes(token) {
  return axios.get(`${BASE_URL}/like`, createConfig(token));
}

function postLikeOrNot(idPost, token) {
  return axios.post(`${BASE_URL}/like/${idPost}`, createConfig(token));
}

function deletePost(idPost, token) {}

const api = {
  createConfig,
  getPosts,
  sendPost,
  getLikes,
  postLikeOrNot,
  postSignUp,
  postSignIn,
  deletePost,
};

export default api;
