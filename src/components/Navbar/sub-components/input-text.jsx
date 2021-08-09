import React from "react"
import inputStyles from "../sub-components/inputs.module.css"

export default function InputText (props){
    return <input className={`${props.button ? inputStyles.dark : " "} ${inputStyles.inputtext} `}type="text" />
}