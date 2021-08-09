import React, {useState} from "react"
import inputStyles from "../sub-components/inputs.module.css"

export default function InputText (props){
   
    const[text, setText] = useState("Buscar GIF")

    const setterClick = ()=>{
        setText(" ")
    }

    const setterText = (e)=>{
        setText(e.target.value)
    }

    return <input value={text} onChange={setterText} onClick={setterClick} className={`${props.button ? inputStyles.dark : " "} ${inputStyles.inputtext} `}type="text" />
}