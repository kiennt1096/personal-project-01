import { Button, Link } from "@mui/material";
import React from "react";

const RadiusButton = ({
  link,
  title,
  textColor,
  backgroundColor,
  border,
  hoverColor,
  borderHoverColor,
  icon,
}) => {
  return (
    <Link
      href={link}
      sx={{
        textDecoration: "none",
        fontSize: "14px",
        color: "#505256",
        fontWeight: "500",
        width: "123px",
        marginRight: "16px",
        ":last-child": {
          marginRight: "0px",
        },
      }}
    >
      <Button
        sx={{
          color: textColor ? textColor : "#505256",
          textTransform: "none",
          padding: "8px 16px",
          fontSize: "14px",
          lineHeight: "24px",
          background: backgroundColor ? backgroundColor : "#f1f2f4",
          textDecoration: "none",
          fontWeight: "500",
          cursor: "pointer",
          borderRadius: "8px",
          fontFamily: "Poppins",
          borderRadius: "50px",
          border: border ? border : "none",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          ":hover": {
            background: hoverColor ? hoverColor : "#e1e4e8",
            borderColor: borderHoverColor ? borderHoverColor : "none",
          },
        }}
      >
        {title}
        {icon}
      </Button>
    </Link>
  );
};

export default RadiusButton;
