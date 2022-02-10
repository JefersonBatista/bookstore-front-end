import axios from "axios";

const BASE_URL = "http://localhost:5000";

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
