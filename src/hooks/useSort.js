const useSort = (activeData) => {
    const sortByRank = (reverse) => {
        let tempData = activeData.coins;
        if (reverse) {
          tempData.sort((a, b) => a.rank - b.rank);
        } else {
          tempData.sort((a, b) => b.rank - a.rank);
        }
      };
      const sortByPrice = (reverse) => {
        let tempData = activeData.coins;
        if (reverse) {
          tempData.sort((a, b) => a.price - b.price);
        } else {
          tempData.sort((a, b) => b.price - a.price);
        }
      };
      const sortByChange = (reverse) => {
        let tempData = activeData.coins;
        if (reverse) {
          tempData.sort((a, b) => a.change - b.change);
        } else {
          tempData.sort((a, b) => b.change - a.change);
        }
      };
      const sortByName = (reverse) => {
        let tempData = activeData.coins;
        if (reverse) {
          tempData.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          });
        } else {
          tempData.sort((a, b) => {
            if (a.name > b.name) {
              return -1;
            }
            if (a.name < b.name) {
              return 1;
            }
            return 0;
          });
        }
      };
      return {sortByRank, sortByPrice, sortByChange, sortByName}
}

export default useSort