interface ProductsProps {
  title: string;
  price: number;
}

const Products = ({ title, price }: ProductsProps) => {
  return (
    <div className="flex items-center justify-between p-2 text-left">
      <div className="max-w-[75%] wrap-break-word text-gray-700">{title}</div>
      <strong>$ {price}</strong>
    </div>
  );
};

export default Products;
