import React from "react";
import giftsStyles from "../Gifts/gifts.module.css";

export default function Trending(props) {
  return (
    <div
      className={`${props.button ? giftsStyles.dark : " "} ${
        giftsStyles.boxGifts
      }`}
    >
      {props.trending.map((gif) => {
        return (
          <a href="https://giphy.com">
            <img
              key={gif.id}
              src={gif.images.fixed_width.url}
              className={`${props.button ? giftsStyles.dark : ""} ${
                giftsStyles.gif
              }`}
            />{" "}
          </a>
        );
      })}
    </div>
  );
}
