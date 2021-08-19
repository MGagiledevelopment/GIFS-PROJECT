import React from "react";
import autocompleteStyles from "../Autocomplete/autocomplete.module.css";

export default function Autocomplete({ autocomplete }) {
  return (
    <div className={autocompleteStyles.mainbox}>
      {autocomplete.map((data) => {
        return (
          <div>
            <li className={autocompleteStyles.list}>{data.name}</li>
          </div>
        );
      })}
    </div>
  );
}
