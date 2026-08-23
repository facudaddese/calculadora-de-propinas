import { useEffect, useState } from "react";
import type { FetchShape } from "../types/Fetch";

export const useFetch = () => {
  const [products, setProducts] = useState<FetchShape[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const getProducts = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("https://fakestoreapi.com/products", {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("No products found");
        const data: FetchShape[] = await res.json();
        setProducts(data);
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === "AbortError") return;
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    getProducts();
    return () => controller.abort();
  }, []);

  return { products, error, loading };
};
