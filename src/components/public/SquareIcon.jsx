import React from "react";
import { Fab } from "@mui/material";

const SquareIcon = ({ icon }) => {
  return (
    <Fab
      size="small"
      sx={{
        background: "#FFF",
        boxShadow:
          "0 0 1px 0 rgba(8, 11, 14, 0.06), 0 3px 3px -1px rgba(8, 11, 14, 0.1)",
        border: "1px solid #F7F8F9",
        marginRight: "14px",
        ":hover": {
          background: "#FFF",
          boxShadow:
            "0 0 1px 0 rgba(8, 11, 14, 0.06), 0 16px 16px -1px rgba(8, 11, 14, 0.1)",
        },
        ":last-child": {
          marginRight: "0",
        },
      }}
    >
      {icon}
    </Fab>
  );
};

export default SquareIcon;
