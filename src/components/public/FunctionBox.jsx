import { Box, Typography } from "@mui/material";
import React from "react";

const FunctionBox = ({ icon, title, subtitle }) => {
  return (
    <Box
      sx={{
        padding: "0 8px",
        maxWidth: "33.3%",
        boxSizing: "border-box",
      }}
    >
      <img
        src={icon}
        alt="function-icon"
        width="40px"
        height="40px"
        marginBottom="4px"
      />
      <Typography
        marginBottom="4px"
        lineHeight="30px"
        fontSize="16px"
        fontWeight="500"
      >
        {title}
      </Typography>
      <Typography
        marginBottom="48px"
        lineHeight="24px"
        fontSize="14px"
        color="#505256"
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default FunctionBox;
