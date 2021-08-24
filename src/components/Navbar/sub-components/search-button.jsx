import React from "react";
import inputStyles from "../sub-components/inputs.module.css";
import ClipLoader from "react-spinners/ClipLoader";

export default function SearchButton({searchButton, setSearchButton,setInputText}) {

  const handleButton = () => {
      setSearchButton(!searchButton);
      setTimeout(()=>{
        setInputText("Buscar GIF")
      }, 2000)
  };

  return (
    <>
      <button onClick={handleButton} className={inputStyles.search}>
        <img src="./images/icon-search.svg" />
      </button>
    </>
  );
}
