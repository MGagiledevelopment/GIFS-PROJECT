import React from "react";
import inputStyles from "../sub-components/inputs.module.css";

export default function SearchButton({
  searchButton,
  setSearchButton,
  setInputText,
  setSend,
  inputText,
}) {
  const handleButton = () => {
    setSend(inputText);
    setSearchButton(!searchButton);
    setTimeout(() => {
      setInputText("");
    }, 2000);
  };

  return (
    <>
      <button onClick={handleButton} className={inputStyles.search}>
        <img src="./images/icon-search.svg" alt="search-icon" />
      </button>
    </>
  );
}
