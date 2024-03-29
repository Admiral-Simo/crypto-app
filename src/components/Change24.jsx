import React from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

const Change24 = ({ change }) => {
  const isUp = Number(change) >= 0;
  return (
    <div
      className={`rounded-lg py-0.5 px-1 bg-transparent flex flex-row items-center w-fit ${
        isUp ? "bg-transparent text-up-text" : "bg-transparent text-down-text"
      }`}
    >
      {isUp ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      <p className="ml-0.5">{Math.abs(change)}%</p>
    </div>
  );
};

export default Change24;
