import React from "react";
import { useNavigate } from "react-router-dom";
import Change24 from "./Change24";
import DisplayPrice from "./DisplayPrice";

const Coin = ({ uuid, iconUrl, name, rank, symbol, change, price }) => {
  const navigate = useNavigate();
  const changeRoute = () => {
    navigate(`/currency/${uuid}`);
  };
  return (
    <tr
      onClick={changeRoute}
      className="border-y-8 border-transparent transition-all duration-500 hover:opacity-70 hover:scale-105 cursor-pointer"
    >
      <td className="text-xl">{rank}</td>
      <td className="flex flex-row items-center space-x-2">
        <img src={iconUrl} alt={name} className="w-10 h-10 md:w-12 md:h-12" />
        <p className="font-bold hidden md:block">{name}</p>
        <p className="text-gray-500 hidden md:block">• {symbol}</p>
      </td>
      <td className="font-bold md:font-normal">
        <DisplayPrice price={price} />
      </td>
      <td>
        <div className="w-full flex justify-center">
          <Change24 change={change} />
        </div>
      </td>
    </tr>
  );
};

export default Coin;
