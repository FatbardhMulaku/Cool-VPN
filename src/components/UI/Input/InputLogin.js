import React from "react";
import { InputAdornment, FormControl, OutlinedInput } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useInput } from "../../../Hooks/useInput";

const useStyles = makeStyles({
  formControl: {
    margin: "10px 0px",
    width: "100%",
  },
  inputOutline: {
    border:"1px solid #707070",
    borderRadius: "10px",
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
      border:"1px solid black !important",
    },
    

    "&:focus, &.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
      border:"1px solid black !important",
    },
  },
});

const InputLogin = (props) => {
  const classes = useStyles();
  const [value, setvalue] = useInput("");
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <OutlinedInput
        className={`${classes.inputOutline} jss65`}
        defaultValue={value}
        type={props.type}
        onChange={setvalue}
        startAdornment={
          <InputAdornment position="start">{props.icon}</InputAdornment>
        }
        placeholder={props.placeholder}
      />
    </FormControl>
  );
};

export default InputLogin;
