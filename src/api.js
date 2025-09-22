import axios from "axios";

// Change this to your Flask backend URL
const API_BASE_URL = "http://127.0.0.1:5000/api";

export const api = axios.create({
  baseURL: API_BASE_URL,
});
