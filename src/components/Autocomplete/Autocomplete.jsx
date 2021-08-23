import React from "react";
import autocompleteStyles from "../Autocomplete/autocomplete.module.css";

export default function Autocomplete({ autocomplete,searchButton,setSearchButton }) {


// const idOption = document.querySelector("autoOption");
// console.log(idOption)


  //  const listener = () => {
     
  //   addEventListener("click",()=>{
  //     const idOption = document.getElementById("autoOption").value;
  //      setInputText(idOption)
  //   })
  // }

const setter = () =>{
  setSearchButton(!searchButton)
}



  return (
    <div className={autocompleteStyles.mainbox}>
      {autocomplete.map((data) => {
        return (
          <div>
            <li onClick={setter} className={autocompleteStyles.list}>{data.name}</li>
          </div>
        );
      })}
    </div>
  );
}
