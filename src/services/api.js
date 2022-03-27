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
  return axios.post(`${BASE_URL}/posts`, body, config);
}

function getPosts(token) {
  const config = createConfig(token);
  return axios.get(`${BASE_URL}/posts`, config);
}

function getPostsByHashtag(hashtag, token){
  const config = createConfig(token);
  return axios.get(`${BASE_URL}/hashtag/${hashtag}`, config);
}

function getLikes() {
  return axios.get(`${BASE_URL}/like`);
}

function postLikeOrNot(idPost, userId) {
  return axios.post(`${BASE_URL}/like/${idPost}`, { userId }); // lembrar que só o auth é suficiente
}

function getTopHashtags(token){
  const config = createConfig(token);
  return axios.get(`${BASE_URL}/topHashtags`, config);
}

const api = {
  createConfig,
  getPosts,
  getPostsByHashtag,
  sendPost,
  getLikes,
  postLikeOrNot,
  postSignUp,
  postSignIn,
  getTopHashtags,
};

export default api;