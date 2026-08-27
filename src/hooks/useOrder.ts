import { useState } from "react";
import type { MenuItem, OrderItem } from "../types/Products";

export const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);

  const addProducts = (product: MenuItem) => {
    setOrder((prev) => {
      if (prev.find((item) => item.id === product.id)) {
        return prev.map((el) =>
          el.id === product.id ? { ...el, quantity: el.quantity + 1 } : el,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const deleteProducts = (id: MenuItem["id"]) => {
    setOrder((prev) => prev.filter((el) => el.id !== id));
  };

  return { order, setOrder, addProducts, deleteProducts };
};
