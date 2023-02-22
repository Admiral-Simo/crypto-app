import useToggle from "../hooks/useToggle";
import Coin from "./Coin";

function DataTable({
  data,
  sortByRank,
  sortByPrice,
  sortByChange,
  sortByName,
}) {
  const [reverse, toggleReverse] = useToggle(false);

  const handleClick = (type) => {
    if (type === "rank") {
      sortByRank(reverse);
    } else if (type === "price") {
      sortByPrice(reverse);
    } else if (type === "change") {
      sortByChange(reverse);
    } else {
      sortByName(reverse);
    }
    toggleReverse();
  };

  return (
    <div className="py-4 px-2 md:px-8 rounded-xl border border-slate-900 mt-10 max-w-4xl mx-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left text-md text-gray-700">
              <button
                className="hover:bg-white hover:text-black transition duration-300 rounded-lg px-1 py-1"
                onClick={() => handleClick("rank")}
              >
                Rank
              </button>
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left text-md text-gray-700">
              <button
                className="hover:bg-white hover:text-black transition duration-300 rounded-lg px-1 py-1"
                onClick={() => handleClick("name")}
              >
                Name
              </button>
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left text-md text-gray-700">
              <button
                className="hover:bg-white hover:text-black transition duration-300 rounded-lg px-1 py-1"
                onClick={() => handleClick("price")}
              >
                Price
              </button>
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left text-md text-gray-700">
              <button
                className="hover:bg-white hover:text-black transition duration-300 rounded-lg px-1 py-1"
                onClick={() => handleClick("change")}
              >
                24h Change
              </button>
            </th>
          </tr>
        </thead>
        <tbody className="space-y-10">
          {data.coins.map((coin, index) => {
            return <Coin key={index} {...coin} volume24={coin["24hVolume"]} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
