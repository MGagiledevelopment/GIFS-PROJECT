import React from "react";
import headerStyles from "../Header/header.module.css";
import Button from "../Header/sub-components/Button";

export default function Header(props) {
  return (
    <header className={headerStyles.header}>
      <img src="./images/logo-light.svg" />
      <Button buttonHeader={props.button} setButtonHeader={props.setButton} />
    </header>
  );
}
