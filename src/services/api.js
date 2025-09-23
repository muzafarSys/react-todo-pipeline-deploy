import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080", // change to your backend API
});

// Example of adding token automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
