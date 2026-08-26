import { useFetch } from "../../hooks/useFetch";
import type { MenuItem } from "../../types/Products";
import Products from "../products/Products";

const ProductsContainer = ({
  addProducts,
}: {
  addProducts: (product: MenuItem) => void;
}) => {
  const { products, error, loading } = useFetch();

  if (loading) return <span>Cargando productos...</span>;
  if (error) return <span>{error}</span>;

  return (
    <section className="overflow-y-auto max-h-170 scrollbar-thin px-7 mt-5">
      <h2 className="text-(length:--text-subtitle) font-bold pb-3">Menú</h2>
      <div className="overflow-hidden space-y-3 ">
        {products.map((item) => (
          <button
            key={item.id}
            className="border border-blue-100 cursor-pointer w-150 hover:bg-gray-100 max-w-full"
            onClick={() => addProducts(item)}
          >
            <Products title={item.title} price={item.price} />
          </button>
        ))}
      </div>
    </section>
  );
};

export default ProductsContainer;
