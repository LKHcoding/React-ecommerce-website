﻿import axios from "axios";
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  ALL_USER_INFO,
  ADMIN_USER_UPDATE,
  ADMIN_USER_DELETE,
  SEARCH_USER_INFO,
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

//전체 유저 목록 불러오기
export function allUserInfo() {
  const request = axios
    .post("/api/users/allUserInfoList")
    .then((response) => response.data);

  return { type: ALL_USER_INFO, payload: request };
}

//검색 유저 목록 불러오기
export function searchUserInfo(data) {
  const request = axios
    .post("/api/users/searchUserInfoList", data)
    .then((response) => response.data);

  return { type: SEARCH_USER_INFO, payload: request };
}

//admin page 유저 정보 수정
export function adminUserUpdate(userList) {
  const request = axios
    .post("/api/users/adminUserUpdate", userList)
    .then((response) => response.data);

  return { type: ADMIN_USER_UPDATE, payload: request };
}

//admin page 유저 삭제
export function adminUserDelete(userId) {
  const request = axios
    .delete("/api/users/adminUserDelete", { data: userId })
    .then((response) => response.data);

  return { type: ADMIN_USER_DELETE, payload: request };
}
