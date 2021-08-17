import React from "react"
import inputStyles from "../sub-components/inputs.module.css"

export default function SearchButton(props) {

   const handleButton = () => {
    props.setSearchButton(!props.searchButton)
   }


    return (<>
    
    <button onClick={handleButton} className={inputStyles.search}><img src="./images/icon-search.svg"/></button>
    </>)
}