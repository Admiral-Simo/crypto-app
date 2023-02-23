import { useEffect, useState } from "react";
import axios from "axios";

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

const useFetch = () => {
  const [activeData, setActiveData] = useState([]);
  const [constData, setConstData] = useState([]);

  const fetchData = async () => {
    const {
      data: { data },
    } = await axios(options);
    setConstData(data);
    setActiveData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { activeData, constData, setConstData, setActiveData };
};

export default useFetch;
