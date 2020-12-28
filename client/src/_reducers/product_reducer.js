import { ALL_PRODUCTS } from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, all_products: action.payload };

    default:
      return state;
  }
}
