import React from "react";
import { Box, Typography, Button } from "@mui/material";
import CustomButton from "../public/CustomButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SquareIcon from "../public/SquareIcon";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import CreateIcon from "@mui/icons-material/Create";
import GitHubIcon from "@mui/icons-material/GitHub";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import VerifiedIcon from "@mui/icons-material/Verified";
import Avatar1 from "../../assets/avatar1.png";
import Avatar2 from "../../assets/avatar2.png";
import Avatar3 from "../../assets/avatar3.png";
import Beach from "../../assets/beach.png";
import RadiusButton from "../public/RadiusButton";
import AddIcon from "@mui/icons-material/Add";
import VideocamIcon from "@mui/icons-material/Videocam";
import CustomInput from "../public/CustomInput";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import KeyIcon from "@mui/icons-material/Key";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        paddingBottom: "100px",
        borderBottom: "1px solid #F1F2F4",
      }}
    >
      <Typography fontSize={"48px"} fontWeight="500" marginBottom="16px">
        Design System for React JS
      </Typography>
      <Typography
        fontSize={"17px"}
        fontWeight="300"
        lineHeight="30px"
        marginBottom="40px"
        textAlign="center"
      >
        Atomize React is a UI framework that helps developers collaborate with
        <br /> designers and build consistent user interfaces effortlessly.
      </Typography>
      <Box marginBottom="96px">
        <CustomButton
          height="48px"
          title="Get Started Now"
          textColor="#FFF"
          backgroundColor="#0284FE"
          hoverColor="#4BA7FE"
          marginRight="16px"
        />
        <CustomButton
          height="48px"
          title="Watch Video"
          backgroundColor="#FFF"
          hoverColor="#F7F8F9"
          border="1px solid #E1E4E8"
          borderHoverColor="#B0B7C3"
          icon={<PlayArrowIcon fontSize="small" />}
        />
      </Box>
      <Box
        width="83.1%"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          width="33%"
          minHeight="380px"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box>
            <SquareIcon
              icon={<FavoriteIcon fontSize="small" sx={{ color: "#F4541D" }} />}
            />
            <SquareIcon
              icon={
                <RemoveRedEyeOutlinedIcon
                  fontSize="small"
                  sx={{ color: "#0284FE" }}
                />
              }
            />
            <SquareIcon
              icon={<CreateIcon fontSize="small" sx={{ color: "#F7AF22" }} />}
            />
            <SquareIcon
              icon={<GitHubIcon fontSize="small" sx={{ color: "#36AB80" }} />}
            />
            <SquareIcon
              icon={<DarkModeIcon fontSize="small" sx={{ color: "#F4541D" }} />}
            />
            <SquareIcon
              icon={<VerifiedIcon fontSize="small" sx={{ color: "#0284FE" }} />}
            />
          </Box>
          <Box
            sx={{
              border: "1px solid #F7F8F9",
              padding: "24px",
              boxShadow:
                "0 0 1px 0 rgba(8, 11, 14, 0.06), 0 16px 16px -1px rgba(8, 11, 14, 0.1)",
              borderRadius: "12px",
              minHeight: "262px",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img
                src={Avatar1}
                alt="avatar1"
                style={{
                  borderRadius: "50%",
                  width: "72px",
                  height: "72px",
                  marginBottom: "16px",
                }}
              />
              <Typography fontSize="22px" fontWeight="500">
                Meagan Fisher
              </Typography>
              <Typography
                fontSize="12px"
                fontWeight="500"
                marginBottom="40px"
                color="#A7AAB0"
              >
                Engineering Manager
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <RadiusButton
                backgroundColor="#0284FE"
                hoverColor="#4BA7FE"
                title="Follow"
                textColor="#FFF"
                icon={<AddIcon fontSize="small" />}
              />
              <RadiusButton
                backgroundColor="#FFF"
                title="Message"
                hoverColor="#F7F8F9"
                border="1px solid #E1E4E8"
                borderHoverColor="#B0B7C3"
                icon={<VideocamIcon fontSize="small" />}
              />
            </Box>
          </Box>
        </Box>
        <Box width="29%" minHeight="364px" maxWidth="270px">
          <Box width="100%">
            <Box
              sx={{
                boxShadow:
                  "0 0 1px 0 rgba(8, 11, 14, 0.06), 0 16px 16px -1px rgba(8, 11, 14, 0.1)",
                borderRadius: "12px",
              }}
            >
              <img
                src={Beach}
                alt="beach"
                style={{
                  height: "227px",
                  width: "270px",
                  objectFit: "fill",
                  borderTopRightRadius: "12px",
                  borderTopLeftRadius: "12px",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={Avatar2}
                    alt="avatar2"
                    style={{
                      borderRadius: "50%",
                      width: "24px",
                      height: "24px",
                      marginRight: "16px",
                    }}
                  />
                  <Typography fontSize="14px" fontWeight="500" color="#000">
                    Meagan Fisher
                  </Typography>
                </Box>
                <FavoriteBorderIcon
                  fontSize="small"
                  sx={{ cursor: "pointer" }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                boxShadow:
                  "0 0 1px 0 rgba(8, 11, 14, 0.06), 0 16px 16px -1px rgba(8, 11, 14, 0.1)",
                borderRadius: "12px",
                padding: "16px",
                marginTop: "20px",
                border: "1px solid #F7F8F9",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <img
                  src={Avatar3}
                  alt="avatar3"
                  style={{
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    marginRight: "16px",
                  }}
                />
                <Box>
                  <Typography fontSize="14px" fontWeight="500" color="#000">
                    John Doe
                  </Typography>
                  <Typography fontSize="12px" fontWeight="400" color="#A7AAB0">
                    UI/UX Designer
                  </Typography>
                </Box>
              </Box>

              <Box>
                <CreateIcon
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
        <Box width="33%">
          <Box
            sx={{
              border: "1px solid #F7F8F9",
              boxShadow:
                "0 0 1px 0 rgba(8, 11, 14, 0.06), 0 16px 16px -1px rgba(8, 11, 14, 0.1)",
              borderRadius: "12px",
              padding: "32px 24px",
            }}
          >
            <Typography
              fontSize="20px"
              fontWeight="500"
              color="#000"
              margin="8px 0"
            >
              Login into your account
            </Typography>
            <Typography
              fontSize="12px"
              fontWeight="400"
              color="#A7AAB0"
              marginBottom="64px"
            >
              Don't have an account yet? Create New
            </Typography>
            <CustomInput
              placeHolder="hello@gmail.com"
              rightIcon={<MailOutlineIcon fontSize="small" />}
            />
            <CustomInput
              placeHolder="password"
              rightIcon={<KeyIcon fontSize="small" />}
            />
            <Button
              sx={{
                width: "100%",
                textTransform: "none",
                background: "#EEF7FF",
                borderRadius: "50px",
                fontSize: "14px",
                padding: "9px 0",
                marginTop: "32px",
                color: "#0284FE",
                ":hover": {
                  background: "#DCEEFF",
                },
              }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
