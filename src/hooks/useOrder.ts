import { useReducer } from "react";
import type { MenuItem } from "../types/Products";
import { reducer } from "../reducers/useReducer";

export const useOrder = () => {
  const [order, dispatch] = useReducer(reducer, []);

  const addProducts = (product: MenuItem) => {
    dispatch({ type: "addProducts", payload: { product } });
  };

  const deleteProducts = (id: MenuItem["id"]) => {
    dispatch({ type: "deleteProducts", payload: { id } });
  };

  const emptyOrder = () => dispatch({ type: "emptyOrder" });

  return { order, addProducts, deleteProducts, emptyOrder };
};
