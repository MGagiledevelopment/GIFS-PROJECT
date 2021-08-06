import React from "react";
import navbarStyles from "../Navbar/navbar.module.css";
import InputText from "./sub-components/input-text";
import SearchButton from "./sub-components/search-button";
export default function Navbar() {
  return (
    <div className={navbarStyles.navbar}>
      <div className={navbarStyles.sectionSearch}>
        <InputText />
        <SearchButton />
      </div>
    </div>
  );
}
