import React from "react";
import Change24 from "./Change24";

// {
//     uuid: "Qwsogvtv82FCd",
//     symbol: "BTC",
//     name: "Bitcoin",
//     color: "#f7931A",
//     iconUrl: "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
//     marketCap: "472938735029",
//     price: "24607.02664951526",
//     listedAt: 1330214400,
//     tier: 1,
//     change: "-0.24",
//     rank: 1,
//     sparkline: [
//       "24686.431425286304",
//       "24709.032706475868",
//       "24747.887783521986",
//       "24775.13796440618",
//       "24769.030043247953",
//       "24767.034403914335",
//       "24780.5550700462",
//       "24818.416178780786",
//       "24788.73152543875",
//       "24737.524587684056",
//       "24663.55626662383",
//       "24647.49409479974",
//       "24695.91545801915",
//       "24726.422697074697",
//       "24750.452523727396",
//       "24769.85745144894",
//       "24806.465943942592",
//       "24873.381028973636",
//       "25005.316791715937",
//       "25046.341237672994",
//       "24807.934911080916",
//       "24654.74147920026",
//       "24652.685119251684",
//       "24586.45197893456",
//       "24616.98957871486",
//     ],
//     lowVolume: false,
//     coinrankingUrl: "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc",
//     "24hVolume": "27860709369",
//     btcPrice: "1",
//   },

const Coin = ({
  iconUrl,
  name,
  rank,
  symbol,
  change,
  price,
  btcPrice,
  marketCap,
  volume24,
}) => {
  return (
    <div className="mb-3 flex flex-row items-center">
      <p className="text-xl mr-6">{rank}</p>
      <div className="flex flex-row justify-between items-center flex-1">
        <div className="flex flex-row items-center space-x-2">
          <img src={iconUrl} alt={name} className="w-12 h-12" />
          <p className="font-bold">{name}</p>
          <p className="text-gray-500">• {symbol}</p>
        </div>
        <Change24 change={change} />
        <p>${Number(price).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Coin;
