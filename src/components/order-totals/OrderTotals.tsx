import { useMemo } from "react";
import type { OrderItem } from "../../types/Products";

interface OrderTotalsProps {
  order: OrderItem[];
  tipState: number;
}

const OrderTotals = ({ order, tipState }: OrderTotalsProps) => {
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
      <p className=" py-1">Propina: ${calculateTip}</p>
      <p className="font-bold text-[25px]">Total: ${total}</p>
    </div>
  );
};

export default OrderTotals;
