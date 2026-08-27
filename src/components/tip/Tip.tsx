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
  tipState: number | null;
}

const Tip = ({ handleTip, tipState }: TipProps) => {
  return (
    <div className="my-5">
      <h2 className="font-bold text-2xl pb-3">Incluir propina</h2>
      {tip.map((item) => (
        <div key={item.id}>
          <input
            type="radio"
            id={item.id}
            name="tip"
            value={item.value}
            checked={tipState === item.value}
            onChange={() => handleTip(item.value)}
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
