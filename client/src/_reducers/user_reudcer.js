import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  ALL_USER_INFO,
  ADMIN_USER_UPDATE,
  ADMIN_USER_DELETE,
  SEARCH_USER_INFO,
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
    case ADMIN_USER_UPDATE:
      return { ...state, admin_user_update: action.payload };
    case ADMIN_USER_DELETE:
      return { ...state, admin_user_delete: action.payload };
    case SEARCH_USER_INFO:
      return { ...state, search_user_info: action.payload };
    default:
      return state;
  }
}
