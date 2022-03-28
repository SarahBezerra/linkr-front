import axios from "axios";

const BASE_URL = "https://back-linkr.herokuapp.com";

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

function getPostsByHashtag(hashtag, token) {
  const config = createConfig(token);
  return axios.get(`${BASE_URL}/hashtag/${hashtag}`, config);
}

function getPostsFromUser(id, token) {
  const config = createConfig(token);
  return axios.get(`${BASE_URL}/posts/${id}`, config);
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

function getUser(id) {
  return axios.get(`${BASE_URL}/user/:id`, { id });
}

function browserUsers(string) {
  return axios.get(`${BASE_URL}/users_filter`, {params:{ username: string}});
}

function getTopHashtags(token) {
  const config = createConfig(token);
  return axios.get(`${BASE_URL}/topHashtags`, config);
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
  getTopHashtags,
  getUser,
  deletePost,
  browserUsers,

};

export default api;
