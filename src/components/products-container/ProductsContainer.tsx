import { useFetch } from "../../hooks/useFetch";
import type { MenuItem } from "../../types/Products";
import Products from "../products/Products";

const ProductsContainer = ({
  addProducts,
}: {
  addProducts: (product: MenuItem) => void;
}) => {
  const { products, error, loading } = useFetch();

  if (loading) return <span>Cargando productos</span>;

  return (
    <section className="space-y-3">
      <h2 className="text-(length:--text-subtitle)">Menú</h2>
      {!error ? (
        products.map((item) => (
          <button
            key={item.id}
            className="border-2 cursor-pointer w-150 hover:bg-gray-100"
            onClick={() => addProducts(item)}
          >
            <Products title={item.title} price={item.price} />
          </button>
        ))
      ) : (
        <span>{error}</span>
      )}
    </section>
  );
};

export default ProductsContainer;
