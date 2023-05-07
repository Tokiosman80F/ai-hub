import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <>
      <Header></Header>
      <Button>Sort By Date</Button>

      <Cards></Cards>
    </>
  );
}

export default App;
