import React from "react";
import { numberWithCommas } from "../utils/numberUtils";

const DisplayPrice = ({ price }) => {
  return<>
    {Number(price) >= 2 ? (
      <p>${numberWithCommas(Number(price).toFixed(2))}</p>
    ) : (
      <p>${Number(price).toFixed(6)}</p>
    )}
  </>;
};

export default DisplayPrice;
