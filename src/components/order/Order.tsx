interface OrderProps {
  title: string;
  price: number;
}
const Order = ({ title, price }: OrderProps) => {
  return (
    <div>
      {title}
      {price}
    </div>
  );
};

export default Order;
