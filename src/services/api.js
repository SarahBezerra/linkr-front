import axios from "axios";

const BASE_URL = 'http://localhost:5000';

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

function getPosts(token, loadCount) {
  const config = createConfig(token);
  config.params = {loadCount}
  return axios.get(`${BASE_URL}/posts`, config);
}

function updatePost(body, token, postId) {
  const config = createConfig(token);
  return axios.put(`${BASE_URL}/posts/${postId}`, body, config);
}

function getPostsByHashtag(hashtag, token, loadCount) {
  const config = createConfig(token);
  config.params = {loadCount}
  return axios.get(`${BASE_URL}/hashtag/${hashtag}`, config);
}

function getPostsFromUser(id, token, loadCount) {
  const config = createConfig(token);
  config.params = {loadCount}
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

function getCommentsNumber(token) {
  return axios.get(`${BASE_URL}/comments`, createConfig(token));
}

function getCommentsPost(idPost, token) {
  return axios.get(`${BASE_URL}/comments/${idPost}`, createConfig(token));
}

function postComment(token, postId, text) {
  return axios.post(
    `${BASE_URL}/comments/${postId}`,
    { text },
    createConfig(token)
  );
}

function getUser(id) {
  return axios.get(`${BASE_URL}/user/:id`, { id });
}

function browserUsers(string, id) {
  const params = {userId: id, username: string}
  return axios.get(`${BASE_URL}/users_filter`, {params});
}

function getTopHashtags(token) {
  const config = createConfig(token);
  return axios.get(`${BASE_URL}/topHashtags`, config);
}

function getFollowers(pageUserId, token) {
  const config = createConfig(token);
  return axios.get(`${BASE_URL}/follows/${pageUserId}`, config);
}

function postFollow(pageUserId, token) {
  const config = createConfig(token);
  return axios.post(`${BASE_URL}/follows`, {pageUserId}, config);
}

function deleteFollow(pageUserId, token) {
  const config = createConfig(token);
  return axios.delete(`${BASE_URL}/follows/${pageUserId}`, config);
}

const api = {
  createConfig,
  getPosts,
  getPostsFromUser,
  getPostsByHashtag,
  sendPost,
  getLikes,
  postLikeOrNot,
  getCommentsNumber,
  getCommentsPost,
  postComment,
  postSignUp,
  postSignIn,
  getTopHashtags,
  getUser,
  deletePost,
  updatePost,
  browserUsers,
  getFollowers,
  postFollow,
  deleteFollow
};

export default api;
