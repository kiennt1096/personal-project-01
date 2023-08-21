import Header from "./components/Header/Header";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import { ThemeProvider, createTheme } from "@mui/material";
import Functions from "./components/Functions/Functions";
import ExCode from "./components/ExCode/ExCode";
import DesDev from "./components/DesDev/DesDev";

const THEME = createTheme({
  typography: {
    fontFamily: `"Poppins", sans-serif`,
  },
});

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <div className="content">
        <Header />
        <Hero />
        <Features />
        <Functions />
        <ExCode />
        <DesDev />
      </div>
    </ThemeProvider>
  );
}

export default App;
