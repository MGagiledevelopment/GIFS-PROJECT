import React, { useState, useEffect } from "react";
import "../styles/main.css";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Gifts from "./Gifts/Gifts";
import { data } from "../utils/utils";
import { automaticData } from "../utils/utils";
import {trending} from "../utils/utils"

function App() {
  const [buttonHeader, setButtonHeader] = useState(false);
  const [searchButton, setSearchButton] = useState(false);
  const [inputText, setInputText] = useState("");
  const [arrayGif, setArrayGif] = useState([]);
  const [autocomplete, setAutocomplete] = useState([]);
  const [top, setTop] =useState([])
  // const [notfound, setNotfound] = useState(false)


  // console.log(inputText)
//   useEffect(()=>{
// if(arrayGif.length === 0){
//   setNotfound(!notfound)
// }
//   },[arrayGif])


  useEffect(() => {
    setTimeout(() => {
      data(searchButton, setSearchButton, setArrayGif, inputText);
    }, 2000);

  }, [searchButton]);

  useEffect(() => {
    automaticData(inputText, setAutocomplete);
  }, [inputText]);

 useEffect(()=>{trending(setTop)}, [])
 


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
        
      />
      <Gifts
        array={arrayGif}
        buttonHeader={buttonHeader}
        setButtonHeader={setButtonHeader}
        autocomplete={autocomplete}
        searchButton={searchButton}
        trending={top}
      />
    </div>
  );
}

export default App;
