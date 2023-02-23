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

  console.log(activeData);

  return (
    <div className="text-white bg-black px-5 py-16 md:py-28 font-poppins min-h-screen">
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
