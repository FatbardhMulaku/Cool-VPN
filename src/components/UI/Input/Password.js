import React from "react";
import {
  InputAdornment,
  FormControl,
  OutlinedInput,
  IconButton,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { useToggle } from "../../../Hooks/useToggle";
import { useInput } from "../../../Hooks/useInput";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  formControl: {
    margin: "10px 0px",
    width: "100%",
  },
  inputOutline: {
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#006fff",
    },
    borderColor: "#707070",
    borderRadius: "10px",

    "&:focus, &.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#006fff",
      borderWidth: "1px",
    },
  },
  icon: {
    color: "#006fff",
    fontSize: '20px'
  },
  customHoverFocus: {
    "&:focus, &.Mui-focusVisible": {
      outline: "none ",
      borderRadius: "0",
    },
    "& > svg ": {
      color: "#006fff",
    },
  },
});

const PasswordInput = (props) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useToggle(false);
  const [password, setPassword] = useInput("");

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <OutlinedInput
        className={classes.inputOutline}
        autoComplete="current-password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={setPassword}
        startAdornment={
          <InputAdornment position="start">
            <IconButton
              className={classes.customHoverFocus}
              onClick={setShowPassword}
              onMouseDown={setPassword}
              edge="start"
            >
              {showPassword ? (
                <LockOpenIcon className={classes.icon} />
              ) : (
                <LockIcon className={classes.icon} />
              )}
            </IconButton>
          </InputAdornment>
        }
        placeholder={props.placeholder}
      />
    </FormControl>
  );
};

export default PasswordInput;
