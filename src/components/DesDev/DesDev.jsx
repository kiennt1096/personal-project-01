import { Box, Typography } from "@mui/material";
import React from "react";
import DesDevCard from "../public/DesDevCard";
import DiamondIcon from "../../assets/desdev1.svg";
import ReactLogo from "../../assets/reactlogo.svg";

const DesDev = () => {
  return (
    <Box
      sx={{
        padding: "120px 0 192px",
        borderBottom: "1px solid #F1F2F4",
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography
          maxWidth="46rem"
          textAlign="center"
          marginBottom="4rem"
          fontWeight="500"
          lineHeight="48px"
          fontSize="32px"
        >
          A combination of tools to design and develop modern applications at
          ease.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        <DesDevCard
          icon={DiamondIcon}
          title="Design"
          subtitle="Design your website by using Atomize for Sketch App."
          link="Design Resource"
        />
        <DesDevCard
          icon={ReactLogo}
          title="Development"
          subtitle="Bring your designs to life with Atomize for React JS."
          link="Documentation"
        />
      </Box>
    </Box>
  );
};

export default DesDev;
