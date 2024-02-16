import { useMemo } from "react";
import { useParams } from "react-router-dom";
import Spin from "../components/Spin";
import Change24 from "../components/Change24";
import useFetch from "../hooks/useFetch";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { numberWithCommas } from "../utils/numberUtils";

function SparklineChart({ data }) {
  return (
    <Sparklines data={data} width={100} height={35} margin={5}>
      <SparklinesLine color="#1c8cdc" />
    </Sparklines>
  );
}

function CurrencyScreen() {
  const { constData } = useFetch();
  const { uuid } = useParams();

  // Filter constData to get the current currency
  const currentCurrency = useMemo(() => {
    if (!uuid || !Array.isArray(constData?.coins)) return null;
    return constData?.coins.find((item) => item.uuid === uuid);
  }, [uuid, constData]);

  return (
    <div className="pt-8 px-2 max-w-screen-xl mx-auto space-y-2">
      {!constData?.coins ? (
        <div className="w-full flex justify-center items-center my-20">
          <Spin />
        </div>
      ) : (
        <>
          <div className="flex items-center gap-3">
            <img
              className="w-8 md:w-16"
              src={currentCurrency?.iconUrl}
              alt="coin"
            />
            <h1 className="font-bold md:text-3xl">
              {currentCurrency?.name}
              <span className="ml-0.5 font-light">
                {currentCurrency?.symbol}
              </span>
            </h1>
          </div>
          <div className="flex justify-between items-center gap-3 w-full">
            {Number(currentCurrency?.price) >= 2 ? (
              <p className="font-bold text-3xl text-black dark:text-white">
                ${numberWithCommas(Number(currentCurrency?.price).toFixed(2))}
              </p>
            ) : (
              <p className="font-bold text-3xl text-black dark:text-white">
                ${Number(currentCurrency?.price).toFixed(6)}
              </p>
            )}
            <Change24 change={currentCurrency?.change} />
          </div>
          <div className="flex items-center gap-3 w-full">
            <h1 className="text-2xl font-bold flex items-center justify-between w-full capitalize text-black dark:text-white">
              marketcap:
              <span className="text-green-700 dark:text-green-300">
                ${numberWithCommas(currentCurrency?.marketCap)}
              </span>
            </h1>
          </div>
          <div className="flex items-center gap-3 w-full">
            <h1 className="text-2xl font-bold flex items-center justify-between w-full capitalize text-black dark:text-white">
              24 hours volume:{" "}
              <span className="text-green-700 dark:text-green-300">
                ${numberWithCommas(currentCurrency["24hVolume"])}
              </span>
            </h1>
          </div>

          <h1 className="text-2xl font-bold capitalize text-black dark:text-white">
            Contract Address:{" "}
          </h1>
          <div className="flex items-center gap-3 flex-wrap">
            {currentCurrency?.contractAddresses.length ? (
              currentCurrency?.contractAddresses.map((item) => (
                <div className="rounded-md py-0.5 px-1 bg-green-900 text-green-200">
                  {item}
                </div>
              ))
            ) : (
              <div className="rounded-md py-0.5 px-1 bg-red-900 text-red-200">
                No address available
              </div>
            )}
          </div>
          <h1 className="text-2xl font-bold capitalize text-black dark:text-white">
            Chart:{" "}
          </h1>
          <SparklineChart data={currentCurrency?.sparkline} />
        </>
      )}
    </div>
  );
}

export default CurrencyScreen;
