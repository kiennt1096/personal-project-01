import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

const CustomInput = ({ placeHolder, rightIcon }) => {
  return (
    <TextField
      InputProps={{
        sx: {
          borderRadius: "50px",
          fontFamily: "Poppins",
          fontSize: "12px",
          fontWeight: 500,
          height: "40px",
          ":hover": {
            border: "none",
            outline: "none",
          },
        },
        endAdornment: (
          <InputAdornment position="end">{rightIcon}</InputAdornment>
        ),
      }}
      placeholder={placeHolder}
      sx={{
        width: "100%",
        marginBottom: "16px",
      }}
    />
  );
};

export default CustomInput;
