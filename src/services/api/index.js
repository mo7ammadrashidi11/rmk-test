import axios from "axios";

export function login(username, password) {
  return axios.post("https://dummyjson.com/auth/login", { username, password });
}

export function getAllProducts(token) {
  return axios.get("https://dummyjson.com/auth/products", {
    headers: { Authorization: `Bearer ${token}` },
  });
}
