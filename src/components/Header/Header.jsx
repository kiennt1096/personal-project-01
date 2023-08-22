import { Box, Container } from "@mui/material";
import React from "react";
import Logo from "../../assets/logo.svg";
import "./Header.css";
import HeaderLink from "../public/HeaderLink";
import CustomButton from "../public/CustomButton";

const Header = () => {
  return (
    <Container className="header-container fixed">
      <Box>
        <img src={Logo} alt="logo" height={18} />
      </Box>
      <Box>
        <HeaderLink title="Features" link="#" />
        <HeaderLink title="Github" link="#" />
        <HeaderLink title="For Designers" link="#" />
        <CustomButton title="Documentation" link="#" />
      </Box>
    </Container>
  );
};

export default Header;
