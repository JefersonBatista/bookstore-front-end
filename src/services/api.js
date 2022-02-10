import axios from "axios";

const BASE_URL = "https://bookstore390.herokuapp.com";

function createAuth(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function signUp(newUser) {
  return axios.post(`${BASE_URL}/sign-up`, newUser);
}

function login(body) {
  return axios.post(`${BASE_URL}/log-in`, body);
}

const api = { signUp, login };

export default api;
