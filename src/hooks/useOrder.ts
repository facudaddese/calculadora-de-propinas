import { useState } from "react";
import type { FetchShape, OrderItem } from "../types/Fetch";

export const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);

  const addProducts = (product: FetchShape) => {
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
