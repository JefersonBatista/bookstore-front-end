import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_API_URL === "dev"
    ? "http://localhost:5000"
    : "https://bookstore390.herokuapp.com";

function createAuth(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function signUp(newUser) {
  return axios.post(`${BASE_URL}/sign-up`, newUser);
}

function login(body) {
  return axios.post(`${BASE_URL}/log-in`, body);
}

function getProducts() {
  return axios.get(`${BASE_URL}/products`);
}

const api = { signUp, login, getProducts };

export default api;
