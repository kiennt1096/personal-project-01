import { Box, Button, Container, Link } from "@mui/material";
import React from "react";
import Logo from "../../assets/logo.svg";
import "./Header.css";
import HeaderLink from "../public/HeaderLink";

const Header = () => {
  return (
    <Container className="header-container">
      <Box>
        <img src={Logo} alt="logo" height={18} />
      </Box>
      <Box>
        <HeaderLink title="Features" link="#" />
        <HeaderLink title="Github" link="#" />
        <HeaderLink title="For Designers" link="#" />
        <Link className="header-link">
          <Button className="header-button">Documentation</Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Header;
