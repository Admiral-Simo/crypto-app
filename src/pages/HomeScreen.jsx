import HeaderText from "../components/HeaderText";
import Search from "../components/Search";
import DataTable from "../components/DataTable";
import useSort from "../hooks/useSort";
import useFetch from "../hooks/useFetch";
import ToggleDarkMode from "../components/ToggleDarkMode";

const HomeScreen = () => {
  const { activeData, constData, setActiveData } = useFetch();

  const { sortByRank, sortByPrice, sortByChange, sortByName } =
    useSort(activeData);

  return (
    <div className="pt-8 px-5 pb-4 font-poppins min-h-screen">
      <div className="flex items-center justify-center">
        <ToggleDarkMode />
      </div>

      <HeaderText className="mx-auto" />
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
