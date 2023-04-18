import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Skills from "./Pages/Skiils";
import Projects from "./Pages/Projects";
import Footer from "./Pages/Footer";
import { useState } from "react";
import { Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Stats from "./Pages/Stats";
import Education from "./Pages/Education";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Button id="themeMode" onClick={toggleColorMode}>
        {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      </Button>
      <About />
      <Education />
      <Skills />
      <Projects />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
