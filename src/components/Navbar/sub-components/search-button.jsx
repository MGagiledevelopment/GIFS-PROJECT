import React from "react";
import inputStyles from "../sub-components/inputs.module.css";
import ClipLoader from "react-spinners/ClipLoader";

export default function SearchButton({searchButton, setSearchButton}) {

  const handleButton = () => {
    setSearchButton(!searchButton);
    
  };

  return (
    <>
      <button onClick={handleButton} className={inputStyles.search}>
        <img src="./images/icon-search.svg" />
      </button>
    </>
  );
}
