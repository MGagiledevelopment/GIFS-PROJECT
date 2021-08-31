import React from "react";
import giftsStyles from "../Gifts/gifts.module.css";
import Notfound from "../Notfound/Notfound";

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
        <>
        <p
          className={`${props.buttonHeader ? giftsStyles.dark : " "} ${
            giftsStyles.title
          }`}
        >
          Realizá tu búsqueda
        </p>
        <p>TOP 15</p>
        </>
      )}

      {props.array.length === 0 ? ( 
        props.trending.map((gif) => {
          return (
            <a href="https://giphy.com">
              <img
                src={gif.images.fixed_width.url}
                className={`${props.buttonHeader ? giftsStyles.dark : ""} ${
                  giftsStyles.gif
                }`}
              />{" "}
            </a>
          );
        })
      ) : (
        <></>
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
                <a href="https://giphy.com">
                  <img
                    src={gif.images.fixed_width.url}
                    className={`${props.buttonHeader ? giftsStyles.dark : ""} ${
                      giftsStyles.gif
                    }`}
                  />{" "}
                </a>
              );
            })
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
      {props.autocomplete === 0 ? <Notfound /> : <></>}
    </div>
  );
}
