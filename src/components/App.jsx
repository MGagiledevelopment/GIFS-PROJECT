import React, { useState, useEffect } from "react";
import "../styles/main.css";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Gifts from "./Gifts/Gifts";
import { data } from "../utils/utils";
import { automaticData } from "../utils/utils";

function App() {
  const [buttonHeader, setButtonHeader] = useState(false);
  const [searchButton, setSearchButton] = useState(false);
  const [inputText, setInputText] = useState(" Buscar GIF");
  const [arrayGif, setArrayGif] = useState([]);
  const [autocomplete, setAutocomplete] = useState([]);



  useEffect(() => {
    setTimeout(()=>{
      data(searchButton, setSearchButton, setArrayGif, inputText);
    }, 2000)
    
  }, [searchButton]);

  useEffect(() => {
      automaticData(inputText, setAutocomplete);
  }, [inputText]);

  return (
    <div className={buttonHeader ? "AppDark" : "App"}>
      <Header buttonHeader={buttonHeader} setButtonHeader={setButtonHeader} />
      <Navbar
        buttonHeader={buttonHeader}
        searchButton={searchButton}
        setSearchButton={setSearchButton}
        inputText={inputText}
        setInputText={setInputText}
        autocomplete={autocomplete}
        // setAutocomplete={setAutocomplete}
      />
      <Gifts
        array={arrayGif}
        buttonHeader={buttonHeader}
        setButtonHeader={setButtonHeader}
      />
    </div>
  );
}

export default App;
