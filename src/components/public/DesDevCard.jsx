import { Box, Link, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const DesDevCard = ({ icon, title, subtitle, link }) => {
  return (
    <Box
      sx={{
        padding: "2rem",
        boxShadow:
          "0 0 1px 0 rgba(8, 11, 14, 0.06), 0 16px 16px -1px rgba(8, 11, 14, 0.1)",
        borderRadius: "12px",
        border: "1px solid #F7F8F9",
        maxWidth: "28.33%",
        background: "#fff",
      }}
    >
      <img src={icon} alt="icon" style={{ marginBottom: "1rem" }} />
      <Typography
        lineHeight="40px"
        fontSize="26px"
        fontWeight="500"
        marginBottom="0.5rem"
      >
        {title}
      </Typography>
      <Typography
        lineHeight="30px"
        fontSize="17px"
        fontWeight="500"
        marginBottom="1.5rem"
        color="#505256"
      >
        {subtitle}
      </Typography>
      <Link
        sx={{
          color: "#0284FE",
          textDecoration: "none",
          fontWeight: "500",
          fontSize: "14px",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        {link}
        <ArrowForwardIcon fontSize="small" sx={{ marginLeft: "16px" }} />
      </Link>
    </Box>
  );
};

export default DesDevCard;
