import Header from "./components/Header/Header";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import { ThemeProvider, createTheme } from "@mui/material";
import Functions from "./components/Functions/Functions";

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
      </div>
    </ThemeProvider>
  );
}

export default App;
