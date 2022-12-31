import { api } from './api'

const API_URL = "http://localhost:8000/api";
type User = {
    username : string,
    password : string,
    email : string,
  }

export const registerService = async (data : User) => {
  try {
    const res = await api.post(`${API_URL}/register`, data);
    return Promise.resolve(res);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};