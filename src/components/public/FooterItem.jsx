import { Box, Typography } from "@mui/material";
import React from "react";

const FooterItem = ({ title, subTitle }) => {
  return (
    <Box maxWidth="25%">
      <Box display="flex" flexDirection="column" maxWidth="14rem">
        <Typography
          fontWeight="700"
          textAlign="center"
          marginBottom="1rem"
          lineHeight="48px"
          fontSize="32px"
        >
          {title}
        </Typography>
        <Typography
          textAlign="center"
          lineHeight="30px"
          fontSize="17px"
          color="#505256"
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterItem;
