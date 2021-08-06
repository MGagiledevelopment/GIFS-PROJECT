import React from "react";
import buttonHeaderStyle from "../sub-components/buttonHeader.module.css";

export default function Button(props) {




  const setterDark = () => {
    props.setButtonHeader(false);
    console.log(props.buttonHeader)
  };

  const setterLigth = () => {
    props.setButtonHeader(true);
    console.log(props.buttonHeader)
  };


  // console.log(props.setButtonHeader(true))
  // console.log(props.buttonHeader)

console.log(props.buttonHeader)


  return (
    <div>
      {props.buttonHeader ? (
        <button onClick={()=>{setterDark()}} className={buttonHeaderStyle.buttonHeader}>
          MODO LIGTH
        </button>
      ) : (
        <button
          onClick={setterLigth}
          className={buttonHeaderStyle.buttonHeader}
        >
          MODO DARK
        </button>
      )}
      
    </div>
  );
}
