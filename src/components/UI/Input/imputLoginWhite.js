import React from "react";
import { InputAdornment, FormControl, OutlinedInput } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useInput } from "../../../Hooks/useInput";

const useStyles = makeStyles({
  formControl: {
    margin: "10px 0px",
	width: "100%",
	padding:"2px 0 !important",
  },

inputOutline: {
	color:"white",
	"& .MuiOutlinedInput-input" :{
		padding: "12px 5px !important",
	},
    "&:hover .MuiOutlinedInput-notchedOutline": {
	  borderColor: "white",
	},
    borderColor: "#fff !important",
    borderRadius: "10px",

    "&:focus, &.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#E2217F",
      borderWidth: "2px",
    },
  },
});

const InputLogin = (props) => {
  const classes = useStyles();
  const [value, setvalue] = useInput("");
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <OutlinedInput
        className={classes.inputOutline}
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
