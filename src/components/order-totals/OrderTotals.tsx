import { useMemo } from "react";
import type { OrderItem } from "../../types/Products";

interface OrderTotalsProps {
  order: OrderItem[];
  tipState: number;
  setTipState: (value: number) => void;
}

const OrderTotals = ({ order, tipState, setTipState }: OrderTotalsProps) => {
  const subTotal = useMemo(
    () =>
      order
        .reduce((acum, item) => acum + item.price * item.quantity, 0)
        .toLocaleString("es-AR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
    [order],
  );

  const calculateTip = useMemo(
    () =>
      (
        parseFloat(subTotal.replace(/\./g, "").replace(",", ".")) * tipState
      ).toLocaleString("es-AR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    [subTotal, tipState],
  );

  const total = useMemo(
    () =>
      (
        parseFloat(subTotal.replace(/\./g, "").replace(",", ".")) +
        parseFloat(calculateTip.replace(/\./g, "").replace(",", "."))
      ).toLocaleString("es-AR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    [subTotal, calculateTip],
  );

  return (
    <div>
      <h2 className="font-bold text-2xl pb-3 text-sky-800">Resumen</h2>
      <p className="py-1">Subtotal: ${subTotal}</p>
      <p className="inline-block py-1">Propina: ${calculateTip}</p>
      {tipState !== 0 && (
        <span
          className="text-[12px] p-1 ml-3 font-semibold text-red-400 cursor-pointer border rounded-2xl"
          onClick={() => setTipState(0)}
        >
          {" "}
          Eliminar propina
        </span>
      )}
      <p className="font-bold text-[25px]">Total: ${total}</p>
    </div>
  );
};

export default OrderTotals;
