import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function useSwitch(cases, equalsCases, equalsCase) {
  const [isCase, setCase] = useState("");

  useEffect(() => {
    for (let i = 0; i < cases.length; i++) {
      let item = cases[i];
      switch (equalsCase) {
        case item:
          setCase(equalsCases[i]);
          break;
        default:
          break;
      }
    }
  }, [cases, equalsCases, equalsCase]);

  return [isCase];
}

useSwitch.propTypes = {
  case: PropTypes.array.isRequired,
  equalsCases: PropTypes.array.equalsCases,
  equalsCase: PropTypes.string.equalsCase,
};

export { useSwitch };
