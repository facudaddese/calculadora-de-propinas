import type { OrderItem } from "../../types/Products";

interface OrderProps {
  item: OrderItem;
  deleteProducts: (id: number) => void;
}

const Order = ({ item, deleteProducts }: OrderProps) => {
  const { id, title, price, quantity } = item;
  return (
    <div className="flex flex-col justify-center gap-2 rounded-xl shadow-[-1px_5px_5px_-4px_rgba(0,0,0,0.59)] mb-1 p-2">
      <div className="flex justify-evenly items-center gap-10">
        <div className="flex-1">
          <h3 className="text-gray-700">{title}</h3>
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
        Cantidad: {quantity} -{" "}
        <strong className="font-bold">${(quantity * price).toLocaleString("es-AR")}</strong>
      </p>
    </div>
  );
};

export default Order;
