import axios from "axios";
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  ALL_USER_INFO,
  USER_INFO,
  FIND_USER,
} from "./types";

export function loginUser(dataTosubmit) {
  const request = axios
    .post("/api/users/signin", dataTosubmit)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function registerUser(dataTosubmit) {
  const request = axios
    .post("/api/users/signup", dataTosubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function auth() {
  const request = axios
    .get("/api/users/auth")
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function allUserInfo() {
  const request = axios
    .post("/api/users/allUserInfoList")
    .then((response) => response.data);

  return { type: ALL_USER_INFO, payload: request };
}

export function findUserInfo() {
  const request = axios
    .post("/api/users/findUserInfo")
    .then((response) => response.data);

  return { type: USER_INFO, payload: request };
}

export function findUser(email) {
  const request = axios
    .post("/api/users/findUser", email)
    .then((response) => response.data);

  return { type: FIND_USER, payload: request };
}
