import React from "react";
import inputStyles from "../sub-components/inputs.module.css";

export default function InputText(props) {

  const setterClick = () => {
    props.setInputText("");
    
  };

  const setterText = (e) => {
    props.setInputText(e.target.value);
  };

  return (
    <input
      value={props.inputText}
      onChange={setterText}
      onClick={setterClick}
      className={`${props.button ? inputStyles.dark : " "} ${
        inputStyles.inputtext
      } `}
      type="text"
      placeholder="Buscar GIF"
    />
  );
}
