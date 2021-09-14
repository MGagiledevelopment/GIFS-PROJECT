import React from "react";
import giftsStyles from "../Gifts/gifts.module.css";
import Results from "../Results/Results";
import Circle from "../Loader/Loader";
import Trending from "../Trending/Trending";

export default function Gifts(props) {
  return (
    <div className={giftsStyles.results}>
      <div className={giftsStyles.gifts}>
        {props.array !== [] && props.send === "" ? (
          <>
            <p
              className={`${props.buttonHeader ? giftsStyles.dark : " "} ${
                giftsStyles.title2
              }`}
            >
              Realizá tu búsqueda
            </p>

            <Trending
              trending={props.trending}
              button={props.buttonHeader}
              children
            />
          </>
        ) : props.array !== [] && props.searchButton === true ? (
          Circle()
        ) : (
          <Results
            arrayGifts={props.array}
            inputText={props.inputText}
            button={props.searchButton}
            buttonHeader={props.buttonHeader}
          />
        )}
      </div>
    </div>
  );
}
