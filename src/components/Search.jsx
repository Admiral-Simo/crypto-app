function Search({ data, setData }) {
  const FilterByInput = (e) => {
    const input = e.target.value;
    let tempData = data;
    const result = tempData.coins.filter(
      (item) =>
        item.symbol.toLowerCase().includes(input.toLowerCase()) ||
        item.name.toLowerCase().includes(input.toLowerCase()),
    );
    setData({ ...tempData, coins: result });
  };

  return (
    <form className="mt-3 md:mt-6 max-w-screen-lg mx-auto">
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            class="duration-300 transition-colors w-5 h-5 text-white dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          onChange={FilterByInput}
          type="search"
          className="duration-300 transition-colors block w-full p-4 pl-10 text-sm focus:outline-none border border-gray-300 rounded-lg bg-black dark:bg-zinc-800 dark:border-gray-600 placeholder-white dark:placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search..."
          required
        />
      </div>
    </form>
  );
}

export default Search;
