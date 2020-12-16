import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  ALL_USER_INFO,
  USER_INFO,
  FIND_USER,
} from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case REGISTER_USER:
      return { ...state, register: action.payload };
    case AUTH_USER:
      return { ...state, userData: action.payload };
    case ALL_USER_INFO:
      return { ...state, all_user_info: action.payload };
    case USER_INFO:
      return { ...state, user_info: action.payload };
    case FIND_USER:
      return { ...state, find_user: action.payload };
    default:
      return state;
  }
}
