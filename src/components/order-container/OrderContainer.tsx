import type { OrderItem } from "../../types/Products";
import Order from "../order/Order";

interface OrderContainerProps {
  order: OrderItem[];
}
const OrderContainer = ({ order }: OrderContainerProps) => {
  return (
    <section>
      <h2 className="text-(length:--text-subtitle)">Orden</h2>
      {order.map((el) => (
        <Order key={el.id} title={el.title} price={el.price} />
      ))}
    </section>
  );
};

export default OrderContainer;
