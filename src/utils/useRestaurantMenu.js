import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";
import menuItemsMockData from "./mocks_api_data/menuItemsMockData";
import getResIdConstants from "./resIdConstants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // const data = await fetch(MENU_URL + resId);
    // const json = await data.json();

    const json = await menuItemsMockData[getResIdConstants(parseInt(resId))];
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
