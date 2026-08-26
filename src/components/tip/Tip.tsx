const tip = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
  {
    id: "tip-70",
    value: 0.7,
    label: "70%",
  },
];

interface TipProps {
  handleTip: (tip: number) => void;
}

const Tip = ({ handleTip }: TipProps) => {
  return (
    <div className="my-5">
      <h2 className="font-bold text-2xl pb-3">Propina</h2>
      {tip.map((item) => (
        <div key={item.id}>
          <input
            type="radio"
            id={item.id}
            name="tip"
            value={item.value}
            onClick={() => handleTip(item.value)}
          />
          <label htmlFor={item.id} className="pl-2">
            {item.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Tip;
