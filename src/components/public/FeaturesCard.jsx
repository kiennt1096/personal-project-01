import React from "react";
import { Box, Link, Typography } from "@mui/material";

const FeaturesCard = ({ icon, mainTitle, subtitle, link }) => {
  return (
    <Box
      sx={{
        boxShadow:
          "0 0 1px 0 rgba(8, 11, 14, 0.06), 0 6px 6px -1px rgba(8, 11, 14, 0.1)",
        padding: "32px",
        border: "1px solid #F7F8F9",
        borderRadius: "12px",
        maxWidth: "25%",
        flex: "1",
      }}
    >
      <Box sx={{ margin: "16px 0 32px" }}>
        <img src={icon} alt="features1" height="32px" />
      </Box>
      <Typography
        fontSize="22px"
        marginBottom="1rem"
        lineHeight="32px"
        fontWeight="500"
      >
        {mainTitle}
      </Typography>
      <Typography
        fontSize="15px"
        marginBottom="2rem"
        lineHeight="30px"
        color="#505256"
      >
        {subtitle}
      </Typography>
      <Link
        href={link}
        sx={{
          color: "#0284FE",
          fontWeight: "500",
          fontSize: "14px",
          textDecoration: "none",
        }}
      >
        See How
      </Link>
    </Box>
  );
};

export default FeaturesCard;
