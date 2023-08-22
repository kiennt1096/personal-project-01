import { Box, Typography } from "@mui/material";
import React from "react";
import FooterItem from "../public/FooterItem";
import RadiusButton from "../public/RadiusButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FooterLinkItem from "../public/FooterLinkItem";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";

const Footer = () => {
  const docsListItem = [
    { title: "Installation", link: "#!" },
    { title: "Theme Setup", link: "#!" },
    { title: "Grid", link: "#!" },
    { title: "Atoms", link: "#!" },
    { title: "Molecules", link: "#!" },
    { title: "Functions", link: "#!" },
  ];
  const atomizeListItem = [
    { title: "Features", link: "#!" },
    { title: "Design", link: "#!" },
    { title: "Development", link: "#!" },
  ];
  const resourcesListItem = [
    { title: "Sketch File", link: "#!" },
    { title: "Github", link: "#!" },
  ];
  const aboutListItem = [
    { title: "Showcase", link: "#!" },
    { title: "Contribute", link: "#!" },
  ];
  const extrasListItem = [
    { title: "Blog", link: "#!" },
    { title: "Need Help?", link: "#!" },
    { title: "Give Feedback", link: "#!" },
  ];
  return (
    <Box>
      <Box
        sx={{
          padding: "4rem 0",
        }}
      >
        <Box
          sx={{
            padding: "2rem 0",
          }}
        >
          <Box display="flex" justifyContent="space-evenly">
            <FooterItem title="15+" subTitle="Ready to use React Components" />
            <FooterItem
              title="60+"
              subTitle="Predefined colors for theme setup"
            />
            <FooterItem
              title="</>"
              subTitle="Detailed documentation for each component"
            />
            <FooterItem
              title="FREE"
              subTitle="Open source with regular updates"
            />
          </Box>
        </Box>
      </Box>
      <Box width="100%">
        <Box
          sx={{
            padding: "56px 64px",
            borderRadius: "56px",
            background: "#F7F8F9",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
          }}
        >
          <Box>
            <Typography
              fontWeight="600"
              lineHeight="40px"
              fontSize="26px"
              marginBottom="0.5rem"
            >
              UI Templates are on their way 🚀
            </Typography>
            <Typography
              color="#505256"
              lineHeight="30px"
              fontSize="17px"
              marginBottom="0"
            >
              Official UI templates build on Atomize React will be released very
              soon.
            </Typography>
          </Box>
          <RadiusButton
            title="Get notified"
            textColor="#fff"
            backgroundColor="#000"
            border="1000rem"
            icon={<ArrowForwardIcon fontSize="small" />}
            hoverColor="#000"
            width="12rem"
            padding="12px 16px"
          />
        </Box>
      </Box>
      <Box width="100%">
        <Box padding="8rem 0 5rem">
          <Box
            marginBottom="8rem"
            display="flex"
            justifyContent="space-evenly"
            alignItems="flex-start"
          >
            <FooterLinkItem title="Docs" listItem={docsListItem} />
            <FooterLinkItem title="Atomize" listItem={atomizeListItem} />
            <FooterLinkItem title="Resources" listItem={resourcesListItem} />
            <FooterLinkItem title="About" listItem={aboutListItem} />
            <FooterLinkItem title="Extras" listItem={extrasListItem} />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <Typography
              fontWeight="400"
              marginBottom="1rem"
              lineHeight="24px"
              fontSize="14px"
            >
              Designed & Developed by KienNT
            </Typography>
            <Box gap="16px">
              <FacebookIcon
                fontSize="small"
                sx={{
                  marginRight: "16px",
                  cursor: "pointer",
                  ":hover": {
                    fill: "#0284FE",
                  },
                }}
              />
              <GoogleIcon
                fontSize="small"
                sx={{
                  marginRight: "16px",
                  cursor: "pointer",
                  ":hover": {
                    fill: "#0284FE",
                  },
                }}
              />
              <GitHubIcon
                fontSize="small"
                sx={{
                  marginRight: "16px",
                  cursor: "pointer",
                  ":hover": {
                    fill: "#0284FE",
                  },
                }}
              />
              <TwitterIcon
                fontSize="small"
                sx={{
                  marginRight: "16px",
                  cursor: "pointer",
                  ":hover": {
                    fill: "#0284FE",
                  },
                }}
              />
              <AppleIcon
                fontSize="small"
                sx={{
                  cursor: "pointer",
                  ":hover": {
                    fill: "#0284FE",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
