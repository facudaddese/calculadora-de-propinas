import { useTip } from "../../hooks/useTip";
import type { MenuItem, OrderItem } from "../../types/Products";
import OrderTotals from "../order-totals/OrderTotals";
import Order from "../order/Order";
import Tip from "../tip/Tip";

interface OrderContainerProps {
  order: OrderItem[];
  setOrder: React.Dispatch<React.SetStateAction<OrderItem[]>>;
  deleteProducts: (id: MenuItem["id"]) => void;
}

const OrderContainer = ({
  order,
  setOrder,
  deleteProducts,
}: OrderContainerProps) => {
  const { tipState, handleTip } = useTip();

  return (
    <section className="mt-5 px-7">
      {order.length != 0 && (
        <>
          <h2 className="text-(length:--text-subtitle) font-bold pb-3 text-sky-800">
            Orden
          </h2>
          <div className="space-y-3 overflow-y-auto scrollbar-thin">
            <div className="max-h-63 space-y-3">
              {order.map((item) => (
                <Order
                  key={item.id}
                  item={item}
                  deleteProducts={deleteProducts}
                />
              ))}
            </div>
          </div>
          <Tip handleTip={handleTip} tipState={tipState} />
          <OrderTotals order={order} tipState={tipState} />
          <button
            className="w-full p-2 mt-7 uppercase font-bold bg-black text-white cursor-pointer border hover:bg-white hover:text-black"
            onClick={() => {
              setOrder([]);
              alert("Orden guardada con éxito!");
            }}
          >
            Guardar y vaciar orden
          </button>
        </>
      )}
    </section>
  );
};

export default OrderContainer;
