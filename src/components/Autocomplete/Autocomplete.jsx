import React from "react";
import autocompleteStyles from "../Autocomplete/autocomplete.module.css";

export default function Autocomplete({
  autocomplete,
  searchButton,
  setSearchButton,
  setInputText,
  buttonHeader
}) {
  // const idOption = document.querySelector("autoOption");
  // console.log(idOption)

  //  const listener = () => {
  //   addEventListener("click",()=>{
  //     const idOption = document.getElementById("autoOption").value;
  //      setInputText(idOption)
  //   })
  // }

  const setter = () => {
    setSearchButton(!searchButton);
    setTimeout(()=>{
      setInputText("")
    }, 2000)
  };

  return (
    <div className={`${buttonHeader ? autocompleteStyles.dark : ""} ${autocompleteStyles.mainbox}`}>
      {searchButton ? (
        <div className={autocompleteStyles.ldsring}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <></>
      )}

      {autocomplete.map((data) => {
        return (
          <div className={autocompleteStyles.listItem}>
            <i class="fas fa-search"></i>
            <li onClick={setter} className={autocompleteStyles.list}>
              {data.name}
            </li>
          </div>
        );
      })}
    </div>
  );
}
