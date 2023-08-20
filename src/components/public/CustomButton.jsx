import React from "react";
import { Button, Link } from "@mui/material";

const CustomButton = ({
  link,
  title,
  height,
  textColor,
  backgroundColor,
  hoverColor,
  border,
  borderHoverColor,
  icon,
  marginRight,
  position,
  bottom,
  right,
}) => {
  return (
    <Link
      href={link}
      sx={{
        textDecoration: "none",
        fontSize: "14px",
        color: "#505256",
        fontWeight: "500",
        marginRight: marginRight ? marginRight : "32px",
        position: position ? position : null,
        bottom: bottom ? bottom : null,
        right: right ? right : null,
        ":last-child": {
          marginRight: "0px",
        },
      }}
    >
      <Button
        sx={{
          color: textColor ? textColor : "#505256",
          textTransform: "none",
          padding: height ? "12px 36px" : "8px 16px",
          fontSize: "14px",
          lineHeight: "24px",
          background: backgroundColor ? backgroundColor : "#f1f2f4",
          textDecoration: "none",
          fontWeight: "500",
          cursor: "pointer",
          borderRadius: "8px",
          fontFamily: "Poppins",
          border: border ? border : "none",
          ":hover": {
            background: hoverColor ? hoverColor : "#e1e4e8",
            borderColor: borderHoverColor ? borderHoverColor : "none",
          },
        }}
      >
        {icon && icon}
        {title}
      </Button>
    </Link>
  );
};

export default CustomButton;
