import api from "./api";
import { Navigate } from "react-router-dom";

export const TOKEN_LOCALSTORAGE_KEY = "TOKEN_ACESS";
export var user_id = null;

export const getAuthentication = () => {
  return api
    .get("/api/auth/verifyToken")
    .then((res) => {
      if (res.status === 200) {
        user_id = res.data.decoded.id;
        return user_id;
      }
    })
    .catch((err) => {
      return false;
    });
};

export const getUserAtual = async () => {
  return await api.get("/api/user/" + getUserId()).then((res) => {
    return res;
  });
};

export const getToken = () => localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);

export const getUserId = () => user_id;

export const storeToken = (token) => {
  localStorage.setItem(TOKEN_LOCALSTORAGE_KEY, token);
};

export const logout = () => {
  localStorage.clear();
  <Navigate to="/"/>
};
