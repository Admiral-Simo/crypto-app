import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import useToggle from "../hooks/useToggle";
import Coin from "./Coin";
import Spin from "./Spin";

function OrderUpDownArrow() {
  return (
    <div className="duration-300 transition-colors flex flex-col text-black dark:text-white items-center">
      <IoMdArrowDropup className="-mb-2" /> <IoMdArrowDropdown />
    </div>
  );
}

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
    <div className="duration-300 transition-colors py-4 px-2 md:px-8 rounded-xl border border-slate-900 mt-10 max-w-screen-lg mx-auto text-black dark:text-gray-200">
      <table className="w-full">
        <thead>
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left text-md">
              <button
                className="hover:opacity-70 flex items-center justify-between transition-opacity duration-300  px-1 py-1"
                onClick={() => handleClick("rank")}
              >
                Rank <OrderUpDownArrow />
              </button>
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left text-md">
              <button
                className="flex items-center justify-between hover:opacity-70 transition-opacity duration-300  px-1 py-1"
                onClick={() => handleClick("name")}
              >
                Name <OrderUpDownArrow />
              </button>
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left text-md">
              <button
                className="flex items-center justify-between hover:opacity-70 transition-opacity duration-300  px-1 py-1"
                onClick={() => handleClick("price")}
              >
                Price <OrderUpDownArrow />{" "}
              </button>
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left text-md">
              <button
                className="flex items-center justify-between hover:opacity-70 transition-opacity duration-300  px-1 py-1"
                onClick={() => handleClick("change")}
              >
                24h Change <OrderUpDownArrow />
              </button>
            </th>
          </tr>
        </thead>
        <tbody className="space-y-10">
          {data?.coins?.map((coin) => {
            return (
              <Coin key={coin.uuid} {...coin} volume24={coin["24hVolume"]} />
            );
          })}
        </tbody>
      </table>
      {!data.coins && (
        <div className="w-full flex  justify-center items-center my-20">
          <Spin />
        </div>
      )}
    </div>
  );
}

export default DataTable;
