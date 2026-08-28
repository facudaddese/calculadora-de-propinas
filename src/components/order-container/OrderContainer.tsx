import { useTip } from "../../hooks/useTip";
import type { MenuItem, OrderItem } from "../../types/Products";
import OrderTotals from "../order-totals/OrderTotals";
import Order from "../order/Order";
import Tip from "../tip/Tip";

interface OrderContainerProps {
  order: OrderItem[];
  emptyOrder: () => void;
  deleteProducts: (id: MenuItem["id"]) => void;
}

const OrderContainer = ({
  order,
  emptyOrder,
  deleteProducts,
}: OrderContainerProps) => {
  const { tipState, handleTip, setTipState } = useTip();

  return (
    <section className="mt-5 px-7">
      {order.length != 0 && (
        <>
          <h2 className="text-(length:--text-subtitle) font-bold pb-3 text-sky-800">
            Orden
          </h2>
          <div className="space-y-3 max-h-70 overflow-y-auto scrollbar-thin pb-2 px-1">
            {order.map((item) => (
              <Order
                key={item.id}
                item={item}
                deleteProducts={deleteProducts}
              />
            ))}
          </div>
          <Tip handleTip={handleTip} tipState={tipState} />
          <OrderTotals
            order={order}
            tipState={tipState}
            setTipState={setTipState}
          />
          <button
            className="w-full p-2 mt-7 uppercase font-bold bg-black text-white cursor-pointer border hover:bg-white hover:text-black"
            onClick={() => {
              emptyOrder();
              setTipState(0);
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
