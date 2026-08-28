import type { MenuItem, OrderItem } from "../types/Products";

type Action =
  | { type: "addProducts"; payload: { product: MenuItem } }
  | { type: "deleteProducts"; payload: { id: MenuItem["id"] } }
  | { type: "emptyOrder" };

export const reducer = (state: OrderItem[], action: Action) => {
  switch (action.type) {
    case "addProducts":
      if (state.find((item) => item.id === action.payload.product.id)) {
        return state.map((el) =>
          el.id === action.payload.product.id
            ? { ...el, quantity: el.quantity + 1 }
            : el,
        );
      }
      return [...state, { ...action.payload.product, quantity: 1 }];
    case "deleteProducts":
      return state.filter((el) => el.id !== action.payload.id);
    case "emptyOrder":
      return [];
    default:
      return state;
  }
};
