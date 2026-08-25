interface ProductsProps {
  title: string;
  price: number;
}

const Products = ({ title, price }: ProductsProps) => {
  return (
    <div className="flex items-center justify-between p-2 text-left">
      <div className="w-120 wrap-break-word">{title}</div>
      <strong>$ {price}</strong>
    </div>
  );
};

export default Products;
