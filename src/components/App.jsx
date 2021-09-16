import React, { useState, useEffect } from "react";
import "../styles/main.css";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Gifts from "./Gifts/Gifts";
import { data } from "../utils/utils";
import { automaticData } from "../utils/utils";
import { trending } from "../utils/utils";

function App() {
  const [buttonHeader, setButtonHeader] = useState(false);
  const [searchButton, setSearchButton] = useState(false);
  const [inputText, setInputText] = useState("");
  const [arrayGif, setArrayGif] = useState([]);
  const [autocomplete, setAutocomplete] = useState([]);
  const [top, setTop] = useState([]);
  const [send, setSend] = useState("");
  const [option, setOption] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      data(searchButton, setArrayGif, inputText, option,setSearchButton);
    }, 2000);
  }, [searchButton, option]);

  useEffect(() => {
    automaticData(inputText, setAutocomplete);
  }, [inputText]);

  useEffect(() => {
setOption([])
  }, [arrayGif]);

  useEffect(() => {
    trending(setTop);
  }, []);

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
        setSend={setSend}
        setOption={setOption}
        option={option}
        setArray={setArrayGif}
      />
      <Gifts
        inputText={inputText}
        array={arrayGif}
        buttonHeader={buttonHeader}
        setButtonHeader={setButtonHeader}
        autocomplete={autocomplete}
        searchButton={searchButton}
        trending={top}
        send={send}
      />
    </div>
  );
}

export default App;
