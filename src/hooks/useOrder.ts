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

  return { order, addProducts };
};
