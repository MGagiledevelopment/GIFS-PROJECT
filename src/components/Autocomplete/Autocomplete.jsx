import React from "react";
import autocompleteStyles from "../Autocomplete/autocomplete.module.css";

export default function Autocomplete({
  autocomplete,
  setOption,
  setInputText,
  buttonHeader,
  setSearchButton,
  searchButton,
  setSend,
}) {
  const setter = async (text) => {
    const key = "4lLsekJPTOO0S7IYawubPut9TBZW9Ka9";
    const petition = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${text}&limit=15&offset=0&rating=g&lang=en`
    );
    const results = await petition.json();

    setOption(results.data);
    setSearchButton(!searchButton);
    setSend("#");
    setTimeout(() => {
      setInputText("");
    }, 2000);
  };

  return (
    <div
      className={`${buttonHeader ? autocompleteStyles.dark : ""} ${
        autocompleteStyles.mainbox
      }`}
    >
      {autocomplete.map((data) => {
        return (
          <div className={autocompleteStyles.listItem}>
            <i class="fas fa-search"></i>
            <button
              onClick={() => {
                setter(data.name);
              }}
              id="prueba"
              className={`${buttonHeader ? autocompleteStyles.dark : ""} ${
                autocompleteStyles.list
              }`}
            >
              {data.name}
            </button>
          </div>
        );
      })}
    </div>
  );
}
