import { useEffect, useState } from "react";
import mockRestaurantMenu from "../utils/mockRestaurantMenu";

const useRestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    // simulate API fetch
    setTimeout(() => {
      setResInfo(mockRestaurantMenu);
    }, 500);
  }, []);

  return resInfo;
};

export default useRestaurantMenu;
