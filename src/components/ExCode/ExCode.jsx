import { Height } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import DesDevCard from "../public/DesDevCard";
import DiamondIcon from "../../assets/desdev1.svg";
import ReactLogo from "../../assets/reactlogo.svg";

const ExCode = () => {
  const codeString = `
  const PaymentCardBlock = () => (
    <Div bg="white" shadow="2" rounded="xl" m={{ b: "1rem" }} p="1.5rem">
      <Div
        border={{ b: "1px solid" }}
        borderColor="gray300"
        p={{ b: "0.75rem" }}
      >
        <Text textSize="title" textWeight="500">
          $1,410.16
        </Text>
        <Text textSize="caption" textColor="light">
          per month
        </Text>
      </Div>
      <Div d="flex" justify="space-between" p={{ t: "1rem", b: "1.5rem" }}>
        <Div>
          <Text textSize="caption" textColor="dark">
            Payment Card
          </Text>
          <Text textSize="caption" textColor="light">
            Component
          </Text>
        </Div>
        <Div>
  `;
  return (
    <Box
      sx={{
        padding: "128px 0",
        borderBottom: "1px solid #F1F2F4",
      }}
    >
      <Typography
        maxWidth="43rem"
        marginBottom="6rem"
        fontSize="40px"
        textAlign="center"
        fontWeight="500"
        lineHeight="48px"
        marginLeft="auto"
        marginRight="auto"
      >
        Code the perfect design for each project using Atomize.
      </Typography>
      <Box position="relative">
        <Box width="100%">
          <Box
            sx={{
              width: "100%",
            }}
          >
            <SyntaxHighlighter language="jsx" style={dracula}>
              {codeString}
            </SyntaxHighlighter>
          </Box>
          <Box></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ExCode;
