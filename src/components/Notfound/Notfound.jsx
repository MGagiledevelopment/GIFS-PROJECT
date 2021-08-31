import React from "react"
import notfoundStyles from "../Notfound/notfound.module.css"


export default function Notfound(){
    return (
        
        <div className={notfoundStyles.mainbox}>
          <img width="230" src="/resource/confusion.svg" alt="" />
          <br />
          <h1 className="font color-white weight-400 ">
            Lo sentimos no encontramos lo que buscas
          </h1>
          <h2 className="font color-white">¡Haz una nueva búsqueda!</h2>
        </div>
    )
}