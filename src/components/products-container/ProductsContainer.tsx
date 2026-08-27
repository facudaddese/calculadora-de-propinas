import type { MenuItem } from "../../types/Products";
import Products from "../products/Products";

interface ProductsContainerProps {
  products: MenuItem[];
  loading: boolean;
  error: string;
  addProducts: (product: MenuItem) => void;
}

const ProductsContainer = ({
  products,
  loading,
  error,
  addProducts,
}: ProductsContainerProps) => {
  if (loading) return <span>Cargando productos...</span>;
  if (error) return <span>{error}</span>;

  return (
    <section className="overflow-y-auto max-h-170 scrollbar-thin px-7 mt-5">
      <h2 className="text-(length:--text-subtitle) font-bold pb-3 text-sky-800">Menú</h2>
      <div className="overflow-hidden space-y-3">
        {products.map((item) => (
          <button
            key={item.id}
            className="rounded-xl cursor-pointer w-150 hover:bg-gray-50 max-w-full shadow-[-1px_5px_5px_-4px_rgba(0,0,0,0.59)] mb-4"
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
