import { Box, Fab, Typography } from "@mui/material";
import React from "react";
import CustomButton from "../public/CustomButton";
import AddIcon from "@mui/icons-material/Add";
import TwitterIcon from "@mui/icons-material/Twitter";
import FunctionBox from "../public/FunctionBox";
import FunctionIcon1 from "../../assets/functions1.svg";
import FunctionIcon2 from "../../assets/functions2.svg";
import FunctionIcon3 from "../../assets/functions3.svg";
import FunctionIcon4 from "../../assets/functions4.svg";
import FunctionIcon5 from "../../assets/functions5.svg";
import FunctionIcon6 from "../../assets/functions6.svg";

const Functions = () => {
  return (
    <Box
      padding="152px 0 80px"
      display="flex"
      sx={{ borderBottom: "1px solid #F1F2F4" }}
    >
      <Box width="33.3%" padding="0px 8px">
        <Box width="100%">
          <Box
            sx={{
              position: "relative",
              marginTop: "0",
              width: "100%",
              paddingBottom: "100%",
            }}
          >
            <Box
              sx={{
                border: "2px solid #000000",
                borderRadius: "1000rem",
                position: "absolute",
                right: "0",
                top: "1rem",
                left: "1rem",
                bottom: "1rem",
                opacity: "0.1",
                aspectRatio: "1 / 1",
              }}
            ></Box>
            <Box
              sx={{
                border: "2px solid #000000",
                borderRadius: "1000rem",
                position: "absolute",
                right: "2rem",
                top: "3rem",
                left: "3rem",
                bottom: "3rem",
                opacity: "0.2",
                aspectRatio: "1 / 1",
              }}
            ></Box>
            <Box
              sx={{
                border: "2px solid #000000",
                borderRadius: "1000rem",
                position: "absolute",
                right: "4rem",
                top: "5rem",
                left: "5rem",
                bottom: "5rem",
                opacity: "0.3",
                aspectRatio: "1 / 1",
              }}
            ></Box>
            <Box
              sx={{
                border: "2px solid #000000",
                borderRadius: "1000rem",
                position: "absolute",
                right: "6rem",
                top: "7rem",
                left: "7rem",
                bottom: "7rem",
                opacity: "0.4",
                aspectRatio: "1 / 1",
              }}
            ></Box>
            <CustomButton
              title="Sign Up"
              link="#"
              backgroundColor="#0284FE"
              textColor="#FFF"
              position="absolute"
              bottom="4rem"
              right="0"
            />
            <Fab
              size="small"
              sx={{
                background: "#F7AF22",
                boxShadow:
                  "0 0 1px 0 rgba(8, 11, 14, 0.06), 0 6px 6px -1px rgba(8, 11, 14, 0.1)",
                position: "absolute",
                left: "2rem",
                top: "7.5rem",
              }}
            >
              <AddIcon fontSize="small" sx={{ fill: "#FFF" }} />
            </Fab>
            <Box
              sx={{
                width: "24px",
                position: "absolute",
                bottom: "1rem",
                left: "5rem",
              }}
            >
              <svg viewBox="0 0 24 24" class="ae fo fp hx hy bk hz hk ">
                <path
                  fill="#F4541D"
                  d="M5.8458278,2 L18.1541722,2 C19.4914503,2 19.9763797,2.13923842 20.4652686,2.40069906 C20.9541574,2.66215969 21.3378403,3.04584256 21.5993009,3.53473144 C21.8607616,4.02362033 22,4.50854969 22,5.8458278 L22,18.1541722 C22,19.4914503 21.8607616,19.9763797 21.5993009,20.4652686 C21.3378403,20.9541574 20.9541574,21.3378403 20.4652686,21.5993009 C19.9763797,21.8607616 19.4914503,22 18.1541722,22 L5.8458278,22 C4.50854969,22 4.02362033,21.8607616 3.53473144,21.5993009 C3.04584256,21.3378403 2.66215969,20.9541574 2.40069906,20.4652686 C2.13923842,19.9763797 2,19.4914503 2,18.1541722 L2,5.8458278 C2,4.50854969 2.13923842,4.02362033 2.40069906,3.53473144 C2.66215969,3.04584256 3.04584256,2.66215969 3.53473144,2.40069906 C4.02362033,2.13923842 4.50854969,2 5.8458278,2 Z M15.3141427,8.79289322 L10.0212495,14.0857864 L8.20710678,12.2716438 C7.81658249,11.8811195 7.18341751,11.8811195 6.79289322,12.2716438 C6.40236893,12.6621681 6.40236893,13.295333 6.79289322,13.6858573 L9.31414268,16.2071068 C9.70466697,16.5976311 10.3378319,16.5976311 10.7283562,16.2071068 L16.7283562,10.2071068 C17.1188805,9.81658249 17.1188805,9.18341751 16.7283562,8.79289322 C16.3378319,8.40236893 15.704667,8.40236893 15.3141427,8.79289322 Z"
                ></path>
              </svg>
            </Box>
            <Box
              sx={{
                background: "#36AB80",
                width: "2.5rem",
                height: "1.5rem",
                borderRadius: "50rem",
                position: "absolute",
                top: "3rem",
                right: "5rem",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "0.9rem",
                  height: "0.9rem",
                  borderRadius: "500rem",
                  background: "#FFF",
                  marginRight: "4.8px",
                }}
              ></Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                left: "11rem",
                top: "11rem",
                height: "",
              }}
            >
              <TwitterIcon fontSize="large" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        maxWidth="58.3%"
        width="58.3%"
        height="500px"
        padding="0px 8px"
        marginLeft="96px"
      >
        <Box
          sx={{
            paddingLeft: "16px",
          }}
        >
          <Typography
            fontSize="40px"
            textAlign="left"
            maxWidth="32rem"
            marginBottom="3rem"
            fontWeight="500"
            lineHeight="48px"
          >
            Beautiful & consistant UI powered with{" "}
            <Typography
              fontSize="40px"
              textAlign="left"
              maxWidth="32rem"
              marginBottom="3rem"
              fontWeight="500"
              lineHeight="48px"
              display="inline-block"
              color="#06d7ff"
            >
              React
            </Typography>
            .
          </Typography>
          <Box>
            <Box flexWrap="wrap"></Box>
          </Box>
        </Box>
        <Box>
          <Box display="flex" flexWrap="wrap">
            <FunctionBox
              icon={FunctionIcon1}
              title="Atomic"
              subtitle="Based on Atomic Design Methodology."
            />
            <FunctionBox
              icon={FunctionIcon2}
              title="Theme Setup"
              subtitle="Auto updating colors and Styleguide."
            />
            <FunctionBox
              icon={FunctionIcon3}
              title="Components"
              subtitle="Ever-increasing list of components."
            />
            <FunctionBox
              icon={FunctionIcon4}
              title="Responsive"
              subtitle="Build fully responsive structures easily."
            />
            <FunctionBox
              icon={FunctionIcon5}
              title="Customisation"
              subtitle="Multiple customisations to suit your style."
            />
            <FunctionBox
              icon={FunctionIcon6}
              title="Icon System"
              subtitle="An inbuilt Icon system for faster development."
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Functions;
