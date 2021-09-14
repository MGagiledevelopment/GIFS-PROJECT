import React from "react";
import Notfound from "../Notfound/Notfound";
import giftsStyles from "../Gifts/gifts.module.css";

export default function Results(props) {
  console.log(props.arrayGifts.length)
  return (
    <div
      className={`${props.buttonHeader ? giftsStyles.dark : " "} ${
        giftsStyles.boxGifts
      }`}
    >
      {props.arrayGifts.length > 0 && props.button === false ? (
        props.arrayGifts.map((gif) => {
          return (
            <>
              <a href="https://giphy.com" target="_blank">
                <img
                  src={gif.images.fixed_width.url}
                  className={`${props.buttonHeader ? giftsStyles.dark : ""} ${
                    giftsStyles.gif
                  }`}
                />{" "}
              </a>
            </>
          );
        })
      ) : props.arrayGifts.length === 0 ? (
        <Notfound />
      ) : (
        <>algo esta mal</>
      )}
    </div>
  );
}
