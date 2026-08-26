import type { OrderItem } from "../../types/Products";

interface OrderProps {
  item: OrderItem;
  deleteProducts: (id: number) => void;
}

const Order = ({ item, deleteProducts }: OrderProps) => {
  const { id, title, price, quantity } = item;
  return (
    <div className="flex flex-col justify-center gap-2 border border-blue-300 p-2">
      <div className="flex justify-evenly items-center gap-10">
        <div className="flex-1">
          <h3>{title}</h3>
        </div>
        <strong>${price}</strong>
        <span
          onClick={() => deleteProducts(id)}
          className="material-symbols-outlined cursor-pointer"
        >
          delete
        </span>
      </div>
      <p className="font-semibold">
        Cantidad: {quantity} - ${(quantity * price).toLocaleString("es-AR")}
      </p>
    </div>
  );
};

export default Order;
