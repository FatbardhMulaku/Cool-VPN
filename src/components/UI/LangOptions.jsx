import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { localesCode } from "../../lang/constants";
// import { useToggle } from "../../Hooks/index";
// import {FcGlobe} from "react-icons/fc"

const LangOptions = () => {
  // const { isTrue, toggleValue, setFalse, setTrue } = useToggle(false);
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.locale);

  const handleChange = (code) => {
    dispatch({ type: "SET_LANG", lang: code });
  };

  return (
    <div  >
      {localesCode.map((item, index) => ( 
        <a key={index} onClick={() => handleChange(item.code)} >
          {item.name} 
        </a>
      ))}
    </div>
  );
};

export default LangOptions;
