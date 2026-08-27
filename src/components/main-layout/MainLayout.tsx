import { useFetch } from "../../hooks/useFetch";
import { useOrder } from "../../hooks/useOrder";
import OrderContainer from "../order-container/OrderContainer";
import ProductsContainer from "../products-container/ProductsContainer";

const MainLayout = () => {
  const { order, setOrder, addProducts, deleteProducts } = useOrder();
  const { products, error, loading } = useFetch();

  return (
    <main className="max-w-7xl py-10 gap-3 mx-auto grid md:grid-cols-2">
      <ProductsContainer
        products={products}
        error={error}
        loading={loading}
        addProducts={addProducts}
      />
      <OrderContainer
        order={order}
        setOrder={setOrder}
        deleteProducts={deleteProducts}
      />
    </main>
  );
};

export default MainLayout;
