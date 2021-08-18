import React, { useState,useEffect } from "react";
import "../styles/main.css";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Gifts from "./Gifts/Gifts";
import {data} from "../utils/utils"

function App() {
  const [buttonHeader, setButtonHeader] = useState(false);
  const [searchButton, setSearchButton] = useState(false);
  const [inputText, setInputText] = useState(" Buscar GIF");
  const [arrayGif, setArrayGif] = useState([]);



useEffect(()=>{
  data(searchButton,setSearchButton, setArrayGif,inputText)
},[searchButton])

// console.log(arrayGif)
// console.log(searchButton)
// console.log(arrayGif.length)
  return (
    <div className={buttonHeader ? "AppDark" : "App"}>
      <Header buttonHeader={buttonHeader} setButtonHeader={setButtonHeader} />
      <Navbar
        buttonHeader={buttonHeader}
        setButtonHeader={setButtonHeader}
        searchButton={searchButton}
        setSearchButton={setSearchButton}
        inputText={inputText}
        setInputText={setInputText}
      />
      <Gifts array={arrayGif} buttonHeader={buttonHeader} setButtonHeader={setButtonHeader} />
    </div>
  );
}

export default App;
