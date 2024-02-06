import React from "react";
import HeaderText from "../components/HeaderText";
import Search from "../components/Search";
import DataTable from "../components/DataTable";
import useSort from "../hooks/useSort";
import useFetch from "../hooks/useFetch";

const HomeScreen = () => {
  const { activeData, constData, setActiveData } = useFetch();

  const { sortByRank, sortByPrice, sortByChange, sortByName } =
    useSort(activeData);

  function toggleDarkMode() {
    const htmlElement = document.querySelector("html");
    htmlElement.classList.toggle("dark");
  }

  return (
    <div className="px-5 py-16 md:py-28 font-poppins min-h-screen">
      <button className="dark:text-white text-black" onClick={toggleDarkMode}>
        Toggle
      </button>
      <HeaderText />
      <Search data={constData} setData={setActiveData} />
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
