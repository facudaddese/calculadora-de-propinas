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
        .toLocaleString("es-AR", { maximumFractionDigits: 2 }),
    [order],
  );

  const calculateTip = useMemo(
    () =>
      (
        parseFloat(subTotal.replace(/\./g, "").replace(",", ".")) * tipState
      ).toLocaleString("es-AR", { maximumFractionDigits: 2 }),
    [subTotal, tipState],
  );

  const total = useMemo(
    () =>
      (
        parseFloat(subTotal.replace(/\./g, "").replace(",", ".")) +
        parseFloat(calculateTip.replace(/\./g, "").replace(",", "."))
      ).toLocaleString("es-AR", { maximumFractionDigits: 2 }),
    [subTotal, calculateTip],
  );

  return (
    <div>
      <h2 className="font-bold text-2xl mb-3">Totales y propina</h2>
      <p className="font-semibold py-1">Subtotal a pagar: ${subTotal}</p>
      <p className="font-semibold py-1">Propina: ${calculateTip}</p>
      <p className="font-bold text-[20px]">Total a pagar: ${total}</p>
    </div>
  );
};

export default OrderTotals;
