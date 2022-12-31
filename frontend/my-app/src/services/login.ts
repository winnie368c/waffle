import { api } from "./api.js";

const API_URL = "http://localhost:8000/api";

type Login = { 
  username : string,
  password : string
}

export const loginService = async (data: Login) => {
  try {
    const res = await api.post(`${API_URL}/login`, data);
    return Promise.resolve(res);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};