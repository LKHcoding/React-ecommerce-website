import axios from "axios";
import { ALL_PRODUCTS } from "../_actions/types";

export function allProducts() {
  const result = axios
    .post("/api/products/allProducts")
    .then((response) => response.data);
  return { type: ALL_PRODUCTS, payload: result };
}
