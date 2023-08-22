import { Box, Link, Typography } from "@mui/material";
import React from "react";

const FooterLinkItem = ({ title, listItem }) => {
  return (
    <Box display="flex" flexDirection="column">
      <Typography
        color="#000"
        marginBottom="1rem"
        fontWeight="500"
        fontSize="14px"
        lineHeight="24px"
      >
        {title}
      </Typography>
      {listItem.map((item) => {
        return (
          <Link
            href={item.link}
            sx={{
              color: "#505256",
              textDecoration: "none",
              marginBottom: "0.5rem",
              fontSize: "14px",
              lineHeight: "24px",
              ":hover": {
                color: "#026DD6",
              },
            }}
          >
            {item.title}
          </Link>
        );
      })}
    </Box>
  );
};

export default FooterLinkItem;
