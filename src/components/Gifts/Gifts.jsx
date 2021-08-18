import React from "react";
import giftsStyles from "../Gifts/gifts.module.css";

export default function Gifts(props) {
  return (
    <div className={giftsStyles.gifts}>
      {props.array.length > 0
        ? <p>Resultado de tu búsqueda</p>
        : <p>Realizá tu búsqueda</p>}

      <div className={`${props.array.length > 0 ? giftsStyles.boxGifts : " " }`}>
        {props.array.length > 0 ? (
          props.array.map((gif) => {
            return (
              <img
                src={gif.images.fixed_width.url}
                className={giftsStyles.gif}
              />
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
