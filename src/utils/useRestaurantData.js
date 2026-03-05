import { useEffect, useState } from "react";

const useRestaurantData = () => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await res.json();
        setResData(json);
      } catch (error) {
        console.error("Error fetching restaurant data", error);
      }
    };

    fetchData();
  }, []);

  return resData;
};

export default useRestaurantData;
