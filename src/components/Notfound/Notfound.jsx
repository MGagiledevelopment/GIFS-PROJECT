import React from "react";
import notfoundStyles from "../Notfound/notfound.module.css";

export default function Notfound() {
  return (
    <div className={notfoundStyles.mainbox}>
      <img width="100" src="/images/notfound.svg" alt="notfound" />
      <p className="font color-white weight-400 ">
        Lo sentimos, no encontramos lo que buscas...
      </p>
      <p className="font color-white">¡Haz una nueva búsqueda!</p>
    </div>
  );
}
