import React from "react";
import giftsStyles from "../Gifts/gifts.module.css";

export default function Gifts(props) {
  return (
    <div className={giftsStyles.gifts}>
      {props.array.length > 0 ? (
        <p
          className={`${props.buttonHeader ? giftsStyles.dark : " "} ${
            giftsStyles.title2
          }`}
        >
          Resultado de tu búsqueda
        </p>
      ) : (
        <p
          className={`${props.buttonHeader ? giftsStyles.dark : " "} ${
            giftsStyles.title
          }`}
        >
          Realizá tu búsqueda
        </p>
      )}

      {props.array.length > 0 ? (
        <div
          className={`${props.buttonHeader ? giftsStyles.dark : " "} ${
            giftsStyles.boxGifts
          }`}
        >
          {props.array.length > 0 ? (
            props.array.map((gif) => {
              return (
                <img
                  src={gif.images.fixed_width.url}
                  className={`${props.buttonHeader ? giftsStyles.dark : "" } ${giftsStyles.gif}`}
                />
              );
            })
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
