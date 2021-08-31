import React from "react";
import buttonHeaderStyle from "../sub-components/buttonHeader.module.css";

export default function Button(props) {

  return (
    <div>
      <button
        onClick={() => {
          props.setButtonHeader(!props.buttonHeader);
        }}
        className={`${props.buttonHeader ? buttonHeaderStyle.dark : ""} ${
          buttonHeaderStyle.buttonHeader
        }`}
      >
        {props.buttonHeader ? "MODO LIGHT" : "MODO DARK"}
      </button>
    </div>
  );
}
