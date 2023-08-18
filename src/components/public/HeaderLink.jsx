import React from "react";
import { Link } from "@mui/material";

const HeaderLink = ({ link, title }) => {
  return (
    <Link
      href={link}
      sx={{
        textDecoration: "none",
        fontSize: "14px",
        color: "#505256",
        fontWeight: "500",
        marginRight: "32px",
        ":last-child": {
          marginRight: "0px",
        },
      }}
    >
      {title}
    </Link>
  );
};

export default HeaderLink;
