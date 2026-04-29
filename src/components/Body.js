import React, { useContext, useEffect, useState } from 'react';
import RestoCards, { withDiscountLabel } from './RestoCards';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import useResraurantData from '../utils/useRestaurantData';


const Body = () => {
  const [resto, setResto] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterResto, setFilterResto] = useState([]);

  const { loggedIn, setUserName } = useContext(UserContext);
  // console.log(setUserName);
  const onlinestatus = useOnlineStatus();
  const restaurantData = useResraurantData();
  console.log(restaurantData, 'resdata');

  const RestaurantCardWithDiscount = withDiscountLabel(RestoCards);

  useEffect(() => {

    if (!restaurantData) return;

    const restaurantList = restaurantData.data.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];

    const formattedData = restaurantList.map((c) => c?.info);

    setResto(formattedData);
    setAllRestaurants(formattedData);
    setFilterResto(formattedData);
  }, [restaurantData]);


  // conditional rendering

  if (resto.length === 0) {
    return <Shimmer />
  }

  if (onlinestatus === false) {
    return <h1 className='text-2xlfont-bold text-center'>Looks like you are Offline ! Please check your internet connection.</h1>
  }
  return resto.length === 0 ? <Shimmer /> : (
    <>
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Top Section */}
        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center my-5">

          {/* Search Section */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <input
              type="text"
              className="w-full sm:w-80 md:w-96 border-b-2 p-2 focus:ring-2 outline-none"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search restaurants..."
            />

            <button
              className="bg-gray-200 rounded-md py-2 px-6 font-medium text-lg hover:shadow-lg"
              onClick={() => {
                const filterResto = allRestaurants.filter((res) =>
                  res.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilterResto(filterResto);
              }}
            >
              Search
            </button>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <button
              className="bg-gray-200 px-6 py-2 rounded-md hover:shadow-md"
              onClick={() => {
                const filtered = allRestaurants.filter(
                  (res) => parseFloat(res.avgRating) > 4.3
                );
                setFilterResto(filtered);
              }}
            >
              Top Rated Restaurant
            </button>

            {/* <div className="flex items-center gap-2">
              <label>UserName:</label>
              <input
                className="border p-2 rounded-md"
                type="text"
                value={loggedIn}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div> */}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filterResto.map((restos) => (
            <Link key={restos.id} to={`/city/mumbai/${restos.id}`}>
              {restos.aggregatedDiscountInfoV3 ? (
                <RestaurantCardWithDiscount resData={restos} />
              ) : (
                <RestoCards resData={restos} />
              )}
            </Link>
          ))}
        </div>

      </div>
    </>
  );
};

export default Body;
