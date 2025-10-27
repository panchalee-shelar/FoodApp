import { useEffect, useState } from "react";
import { MENU_URL } from "./mockData";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);

    // const fetchData = async ()=>{
    //     const responseData = await fetch(MENU_URL + resId);
    //     console.log('menu data', responseData);
    //     const jsonData = await responseData.json();
    //     console.log('menu json data', jsonData);
    //     setResInfo(jsonData.data);
    // }
    const fetchData = async () => {
        try {
            const responseData = await fetch(MENU_URL + resId);

            // Check if response is OK (status 200-299)
            if (!responseData.ok) {
                throw new Error(`HTTP error! Status: ${responseData.status}`);
            }

            // Check if response has content before parsing
            const text = await responseData.text();
            if (!text) {
                throw new Error("Empty response body");
            }

            const jsonData = JSON.parse(text);
            setResInfo(jsonData.data);
            return jsonData.data;
        } catch (error) {
            console.error("Error fetching menu data:", error);
            setResInfo(null); // optional: handle in UI
        }
    };

    return resInfo;
}

export default useRestaurantMenu;