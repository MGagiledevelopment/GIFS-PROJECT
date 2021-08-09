import React from "react";
import navbarStyles from "../Navbar/navbar.module.css";
import InputText from "./sub-components/input-text";
import SearchButton from "./sub-components/search-button";

// import"../Navbar/dark.css"
export default function Navbar(props) {


  return (
    <div className={navbarStyles.navbar}>



       <h1 className={`${props.button ? navbarStyles.dark : " " } navbarStyles.mainTitle `}>¡Inpirate y busca los mejores gifts!</h1>



        <img src="./images/navbar.svg"/>
      <div className={navbarStyles.sectionSearch}>
        <InputText />
        <SearchButton />
      </div>
      <h2 className={navbarStyles.subTitle}>Realizá tu búsqueda</h2>
    </div>
  );
}
