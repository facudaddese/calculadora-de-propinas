import Order from "../order/Order";
import ProductsContainer from "../products-container/ProductsContainer";

const MainLayout = () => {
  return (
    <main className="max-w-7xl py-10 gap-3 mx-auto grid md:grid-cols-2">
      <ProductsContainer />
      <Order />
    </main>
  );
};

export default MainLayout;
