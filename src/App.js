import Header from "./components/Header/Header";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import Functions from "./components/Functions/Functions";
import ExCode from "./components/ExCode/ExCode";
import DesDev from "./components/DesDev/DesDev";
import Footer from "./components/Footer/Footer";

const THEME = createTheme({
  typography: {
    fontFamily: `"Poppins", sans-serif`,
  },
});

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box className="content">
          <Header />
          <Hero />
          <Features />
          <Functions />
          <ExCode />
          <DesDev />
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
