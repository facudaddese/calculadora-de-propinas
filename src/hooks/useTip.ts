import { useState } from "react";

export const useTip = () => {
  const [tipState, setTipState] = useState(0);

  const handleTip = (tip: number) => setTipState(tip);

  return { tipState, handleTip, setTipState };
};
