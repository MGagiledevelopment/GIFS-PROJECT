import React, { useState } from "react";
import "../styles/main.css";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Gifts from "./Gifts/Gifts";

function App() {
  const [buttonHeader, setButtonHeader] = useState(false);
  const [searchButton, setSearchButton] = useState(false);
  const [inputText, setInputText] = useState(" Buscar GIF");
  const [arrayGif, setArrayGif] = useState([]);

  return (
    <div className={buttonHeader ? "AppDark" : "App"}>
      <Header buttonHeader={buttonHeader} setButtonHeader={setButtonHeader} />
      <Navbar
        searchButton={searchButton}
        setSearchButton={setSearchButton}
        inputText={inputText}
        setInputText={setInputText}
      />
      <Gifts />
    </div>
  );
}

export default App;
