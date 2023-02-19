import React from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

const Change24 = ({ change }) => {
  const isUp = Number(change) >= 0;
  return (
    <div
      className={`rounded-lg py-0.5 px-1 flex flex-row items-center ${
        isUp ? "bg-up-bg text-up-text" : "bg-down-bg text-down-text"
      }`}
    >
      {isUp ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      <p className="ml-0.5">{Math.abs(change)}%</p>
    </div>
  );
};

export default Change24;
