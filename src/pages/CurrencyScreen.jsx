import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Spin from "../components/Spin";
import Change24 from "../components/Change24";
import useFetch from "../hooks/useFetch";
import DisplayPrice from "../components/DisplayPrice";
import { numberWithCommas } from "../utils/numberUtils";

// interface CoinData {
//     uuid: string;
//     symbol: string; used
//     name: string; used
//     color: string; not used
//     iconUrl: string; used
//     marketCap: string; used
//     price: string; used
//     listedAt: number;
//     tier: number;
//     change: string; used
//     rank: number;
//     sparkline: string[];
//     lowVolume: boolean;
//     coinrankingUrl: string;
//     '24hVolume': string; used
//     contractAddresses: string[];
// }

function CurrencyScreen() {
  const { constData } = useFetch();
  const { uuid } = useParams();

  // Filter constData to get the current currency
  const currentCurrency = useMemo(() => {
    if (!uuid || !Array.isArray(constData?.coins)) return null;
    return constData?.coins.find((item) => item.uuid === uuid);
  }, [uuid, constData]);

  return (
    <div className="pt-8 max-w-screen-xl mx-auto">
      {!constData?.coins ? (
        <div className="w-full flex justify-center items-center my-20">
          <Spin />
        </div>
      ) : (
        <>
          <div className="flex items-center gap-3">
            <img className="w-8" src={currentCurrency?.iconUrl} alt="coin" />
            <h1 className="font-bold">
              {currentCurrency?.name}
              <span className="ml-0.5 font-light">
                {currentCurrency?.symbol}
              </span>
            </h1>
          </div>
          <div className="flex items-center gap-3">
            {Number(currentCurrency?.price) >= 2 ? (
              <p className="font-bold text-3xl">
                ${numberWithCommas(Number(currentCurrency?.price).toFixed(2))}
              </p>
            ) : (
              <p>${Number(currentCurrency?.price).toFixed(6)}</p>
            )}
            <Change24 change={currentCurrency?.change} />
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold capitalize">
              marketcap:{" "}
              <span className="text-green-300">
                ${numberWithCommas(currentCurrency?.marketCap)}
              </span>
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold capitalize">
              24 hours volume:{" "}
              <span className="text-green-300">
                ${numberWithCommas(currentCurrency["24hVolume"])}
              </span>
            </h1>
          </div>
        </>
      )}
    </div>
  );
}

export default CurrencyScreen;
