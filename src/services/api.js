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

function getPosts() {
  return axios.get(`${BASE_URL}/posts`);
}

function getPostsFromUser(id) {
  return axios.get(`${BASE_URL}/posts/${id}`);
}

function getPostsByHashtag(hashtag) {
  const config = null;
  return axios.get(`${BASE_URL}/hashtag/${hashtag}`, config);
}

function getLikes(token) {
  return axios.get(`${BASE_URL}/like`, createConfig(token));
}

function postLikeOrNot(idPost, token) {
  return axios.post(`${BASE_URL}/like/${idPost}`, {}, createConfig(token));
}

function deletePost(idPost, token) {
  return axios.delete(`${BASE_URL}/posts/${idPost}`, createConfig(token));
}

function getUser(id){
  return axios.get(`${BASE_URL}/user/:id`, {id})
}

const api = {
  createConfig,
  getPosts,
  getPostsFromUser,
  getPostsByHashtag,
  sendPost,
  getLikes,
  postLikeOrNot,
  postSignUp,
  postSignIn,
  getUser,
  deletePost

};

export default api;
