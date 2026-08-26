import { useTip } from "../../hooks/useTip";
import type { MenuItem, OrderItem } from "../../types/Products";
import OrderTotals from "../order-totals/OrderTotals";
import Order from "../order/Order";
import Tip from "../tip/Tip";

interface OrderContainerProps {
  order: OrderItem[];
  deleteProducts: (id: MenuItem["id"]) => void;
}

const OrderContainer = ({ order, deleteProducts }: OrderContainerProps) => {
  const { tipState, handleTip } = useTip();

  return (
    <section>
      <h2 className="text-(length:--text-subtitle) font-bold">Orden</h2>
      <div className="space-y-3 overflow-y-auto scrollbar-thin pr-7">
        <div className="max-h-83 space-y-3">
          {order.map((item) => (
            <Order key={item.id} item={item} deleteProducts={deleteProducts} />
          ))}
        </div>
      </div>
      {order.length != 0 && <Tip handleTip={handleTip} />}
      {order.length !== 0 && <OrderTotals order={order} tipState={tipState} />}
    </section>
  );
};

export default OrderContainer;
