import React from "react";
import navbarStyles from "../Navbar/navbar.module.css";
import InputText from "./sub-components/input-text";
import SearchButton from "./sub-components/search-button";
import Autocomplete from "../Autocomplete/Autocomplete.jsx";

export default function Navbar({
  buttonHeader,
  searchButton,
  setSearchButton,
  inputText,
  setInputText,
  autocomplete,
  setSend,
  setOption,
}) {
  return (
    <div className={navbarStyles.navbar}>
      <h1
        className={`${buttonHeader ? navbarStyles.dark : " "} ${
          navbarStyles.mainTitle
        } `}
      >
        ¡Inspirate y buscá los mejores <span>GIFS</span>!
      </h1>

      <img src="./images/navbar.svg" className={navbarStyles.img} />
      <div className={navbarStyles.sectionSearch}>
        <InputText
          inputText={inputText}
          setInputText={setInputText}
          setSearchButton={setSearchButton}
          button={buttonHeader}
        />
        <SearchButton
          searchButton={searchButton}
          setSearchButton={setSearchButton}
          setInputText={setInputText}
          inputText={inputText}
          autocomplete={autocomplete}
          setSend={setSend}
        />
      </div>

      <div>
        {" "}
        {autocomplete.length > 0 ? (
          <Autocomplete
            autocomplete={autocomplete}
            setInputText={setInputText}
            searchButton={searchButton}
            setSearchButton={setSearchButton}
            buttonHeader={buttonHeader}
            setOption={setOption}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
