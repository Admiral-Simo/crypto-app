import React, { useEffect, useState } from "react";
import { data } from "../data";
import Coin from "../components/Coin";
import axios from "axios";
import HeaderText from "../components/HeaderText";
import Search from "../components/Search";
import DataTable from "../components/DataTable";

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

const HomeScreen = () => {
  const [activeData, setActiveData] = useState(data);

  const sortByRank = (reverse) => {
    let tempData = activeData.coins;
    if (reverse) {
      tempData.sort((a, b) => a.rank - b.rank);
    } else {
      tempData.sort((a, b) => b.rank - a.rank);
    }
  };
  const sortByPrice = (reverse) => {
    let tempData = activeData.coins;
    if (reverse) {
      tempData.sort((a, b) => a.price - b.price);
    } else {
      tempData.sort((a, b) => b.price - a.price);
    }
  };
  const sortByChange = (reverse) => {
    let tempData = activeData.coins;
    if (reverse) {
      tempData.sort((a, b) => a.change - b.change);
    } else {
      tempData.sort((a, b) => b.change - a.change);
    }
  };
  const sortByName = (reverse) => {
    let tempData = activeData.coins;
    if (reverse) {
      tempData.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    } else {
      tempData.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
    }
  };

  return (
    <div className="text-white bg-black px-5 py-16 md:py-28 font-poppins min-h-screen">
      <HeaderText />
      <Search data={data} setData={setActiveData} />
      <DataTable
        data={activeData}
        sortByRank={sortByRank}
        sortByPrice={sortByPrice}
        sortByChange={sortByChange}
        sortByName={sortByName}
      />
    </div>
  );
};

export default HomeScreen;
