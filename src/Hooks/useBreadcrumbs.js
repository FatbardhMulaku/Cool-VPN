import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const useBreadcrumbs = (pathname) => {
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    let pathArray = pathname.split("/");
    setPaths(pathArray);
  }, [pathname]);

  return [paths];
};

useBreadcrumbs.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export { useBreadcrumbs };
