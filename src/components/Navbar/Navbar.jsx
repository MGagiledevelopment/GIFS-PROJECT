import React from "react";
import navbarStyles from "../Navbar/navbar.module.css";
import InputText from "./sub-components/input-text";
import SearchButton from "./sub-components/search-button";

export default function Navbar(props) {
  return (
    <div className={navbarStyles.navbar}>
      <h1
        className={`${props.buttonHeader ? navbarStyles.dark : " "} ${
          navbarStyles.mainTitle
        } `}
      >
        ¡Inpirate y busca los mejores <span>GIFS</span>!
      </h1>

      
      <img src="./images/navbar.svg" className={navbarStyles.img}/>
      <div className={navbarStyles.sectionSearch}>
        <InputText inputText={props.inputText} setInputText={props.setInputText} button={props.buttonHeader}/>
        <SearchButton searchButton={props.searchButton} setSearchButton={props.setSearchButton}/>
      </div>
    </div>
  );
}
