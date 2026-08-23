import { useFetch } from "../../hooks/useFetch";
import Products from "../products/Products";

const ProductsContainer = () => {
  const { products, error, loading } = useFetch();

  if (loading) return <span>Cargando productos</span>;

  return (
    <section className="space-y-3">
      <h2 className="text-(length:--text-subtitle)">Menú</h2>
      {!error ? (
        products.map((el) => (
          <button
            key={el.id}
            className="border-2 cursor-pointer w-150 hover:bg-gray-100"
            onClick={() => addProducts(el.id)}
          >
            <Products title={el.title} price={el.price} />
          </button>
        ))
      ) : (
        <span>{error}</span>
      )}
    </section>
  );
};

export default ProductsContainer;
