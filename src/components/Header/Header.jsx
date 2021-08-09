import React from "react";
import headerStyles from "../Header/header.module.css";
import Button from "../Header/sub-components/Button";

export default function Header(props) {
  return (
    <header className={headerStyles.header}>
      {(props.button) ? <img src="./images/logo-dark.svg" className={headerStyles.img}/> : <img src="./images/logo-light.svg" className={headerStyles.img}/> }
      <Button buttonHeader={props.button} setButtonHeader={props.setButton} />
    </header>
  );
}
