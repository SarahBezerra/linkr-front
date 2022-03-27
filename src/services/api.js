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

function getPosts() {
  return axios.get(`${BASE_URL}/posts`);
}

function getPostsFromUser(id) {
  return axios.get(`${BASE_URL}/posts/${id}`);
}

function getLikes() {
  return axios.get(`${BASE_URL}/like`);
}

function postLikeOrNot(idPost, userId) {
  return axios.post(`${BASE_URL}/like/${idPost}`, { userId }); // lembrar que só o auth é suficiente
}

function getUser(id){
  return axios.get(`${BASE_URL}/user/:id`, {id})
}

const api = {
  createConfig,
  getPosts,
  getPostsFromUser,
  sendPost,
  getLikes,
  postLikeOrNot,
  postSignUp,
  postSignIn,
  getUser
};

export default api;
