import React, { useEffect } from "react";
import axios from "axios";
import Coin from "./components/Coin";
import {data} from './data'

const options = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coins",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "50",
    offset: "0",
  },
  headers: {
    "X-RapidAPI-Key": "123ea335a7msh979dc8eea9e603ep1cc954jsn810feadccd1d",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

function App() {
  return (
    <div className="text-white bg-black px-5 py-28 font-poppins">
      <h1 className="font-bold text-4xl text-center mb-3">
        Best Coin Price Tracker in the Market
      </h1>
      <p className="text-xl font-light text-gray-400 mx-auto text-center max-w-lg">
        With CoinStats, you can manage all your crypto assets from one
        interface.The global crypto market cap is 11.2T a 0.07 % decrease over
        the last day.
      </p>

      <div className="py-4 px-8 rounded-xl border border-slate-900 mt-10 max-w-4xl mx-auto">
        {data.coins.map((coin, index) => {
          return <Coin key={index} {...coin} volume24={coin["24hVolume"]} />
        })}
      </div>
      

    </div>
  );
}

export default App;
