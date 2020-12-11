import { useState } from "react";

function useToggle(toggledValue = false) {
  const [isTrue, setIsTrue] = useState(toggledValue);

  const toggleValue = () => {
    setIsTrue(!isTrue);
  };
  const setFalse = () => {
    setIsTrue(false);
  };
  const setTrue = () => {
    setIsTrue(true);
  };

  return { isTrue, toggleValue, setFalse, setTrue };
}

export { useToggle };
