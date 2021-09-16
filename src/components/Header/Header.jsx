import React from "react";
import headerStyles from "../Header/header.module.css";
import Button from "../Header/sub-components/Button";

export default function Header(props) {
  return (
    <header className={headerStyles.header}>
      {props.buttonHeader ? (
        <img src="./images/logo-dark.svg" className={headerStyles.img} alt="logo-dark" />
      ) : (
        <img src="./images/logo-light.svg" className={headerStyles.img} alt="logo-ligth"/>
      )}
      <Button
        buttonHeader={props.buttonHeader}
        setButtonHeader={props.setButtonHeader}
      />
    </header>
  );
}
