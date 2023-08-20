import { Box, Typography } from "@mui/material";
import React from "react";
import "../../../src/index.css";
import Features1 from "../../assets/features1.svg";
import Features2 from "../../assets/features2.svg";
import Features3 from "../../assets/features3.svg";
import Features4 from "../../assets/features4.svg";
import FeaturesCard from "../public/FeaturesCard";

const Features = () => {
  return (
    <Box
      sx={{
        paddingTop: "128px",
        paddingBottom: "100px",
        borderBottom: "1px solid #F1F2F4",
      }}
    >
      <Box
        sx={{
          background: "#000",
          padding: "7px 16px",
          borderRadius: "50px",
          display: "inline-block",
          marginBottom: "32px",
        }}
      >
        <Typography fontSize="12px" color="#fff">
          Key features
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: "32px",
          lineHeight: "48px",
          marginBottom: "1rem",
          fontWeight: "500",
        }}
      >
        Why use Atomize React?
      </Typography>
      <Typography
        sx={{
          fontSize: "17px",
          lineHeight: "30px",
          marginBottom: "3rem",
          fontWeight: "400",
          maxWidth: "33rem",
          color: "#505256",
        }}
      >
        Atomize React helps you in building fully responsive websites and
        products that match your style.
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "16px",
        }}
      >
        <FeaturesCard
          icon={Features1}
          mainTitle="Flexible Grid"
          subtitle="Change grid variables or give decimal column size."
          link="!#"
        />
        <FeaturesCard
          icon={Features2}
          mainTitle="Style guide"
          subtitle="Update theme throughout the application easily."
          link="!#"
        />
        <FeaturesCard
          icon={Features3}
          mainTitle="Spacing"
          subtitle="A better and controlled way of update spacing."
          link="!#"
        />
        <FeaturesCard
          icon={Features4}
          mainTitle="Responsive"
          subtitle="Better control to make the app responsive."
          link="!#"
        />
      </Box>
    </Box>
  );
};

export default Features;
