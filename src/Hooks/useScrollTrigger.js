import { useState } from "react";
import { useScrollTrigger as useScrollTriggerMUI } from "@material-ui/core";
import PropTypes from "prop-types";

const useScrollTrigger = ({ window, disableHysteresis, threshold }) => {
  const [trigger, setTrigger] = useState(false);

  const triggerScroll = useScrollTriggerMUI({
    disableHysteresis: disableHysteresis,
    threshold: threshold,
    target: window ? window() : undefined,
  });
  setTrigger(triggerScroll);

  return [trigger];
};

useScrollTrigger.propTypes = {
  threshold: PropTypes.number.isRequired,
  disableHysteresis: PropTypes.bool.isRequired,
};

export { useScrollTrigger };
