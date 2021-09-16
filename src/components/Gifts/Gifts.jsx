import React, { useState } from "react";
import giftsStyles from "../Gifts/gifts.module.css";
import Results from "../Results/Results";
import Circle from "../Loader/Loader";
import Trending from "../Trending/Trending";
import ClipLoader from "react-spinners/ClipLoader";

export default function Gifts(props) {
  let [color, setColor] = useState(`#8154DB`);

  return (
    <div className={giftsStyles.results}>
      <div className={giftsStyles.gifts}>
        {props.trending.length === 0 ? (
          <ClipLoader color={color} />
        ) : props.array !== [] && props.send === "" ? (
          <>
            <p
              className={`${props.buttonHeader ? giftsStyles.dark : " "} ${
                giftsStyles.title2
              }`}
            >
              Realizá tu búsqueda
            </p>

            <Trending trending={props.trending} button={props.buttonHeader} />
          </>
        ) : props.array !== [] && props.searchButton === true ? (
          Circle()
        ) : (
          <>
            <p
              className={`${props.buttonHeader ? giftsStyles.dark : " "} ${
                giftsStyles.title2
              }`}
            >
              Resultado de tu búsqueda:{" "}
            </p>
            <Results
              arrayGifts={props.array}
              inputText={props.inputText}
              button={props.searchButton}
              buttonHeader={props.buttonHeader}
            />
          </>
        )}
      </div>
    </div>
  );
}
