import React, { useEffect, useState } from 'react';
import RestoCards from './RestoCards';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';


const Body = () => {
  const [resto, setResto] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterResto, setFilterResto] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');


        // const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null');

        const json = await data.json();

        console.log('swiggy data', json)

        /*console.log('swiggy data', json.data.cards[1].card.card.info)
        this console gives undefined Because cards[1] is not a restaurant card — maybe it's a carousel, ad, or another layout.*/


        // json.data.cards.forEach((item, index) => {
        //   console.log(index, item.card?.card?.info?.name);
        // });

        // const restaurantCards = json.data.cards.filter(c => c.card && c.card.card && c.card?.card?.info);

        const restaurantList = json.data.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];
        
        // console.log('cards', restaurantList[0].info)

        // console.log('cards', restaurantCards[0].card.card.info.name)

        const formattedData = restaurantList.map((c) => c?.info);
        console.log('data',formattedData)
        setResto(formattedData);
        setAllRestaurants(formattedData);
        setFilterResto(formattedData);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  // conditional rendering

  // if(resto.length === 0){
  //   return <Shimmer/>
  // }

  const onlinestatus = useOnlineStatus();

  if(onlinestatus === false){
    return <h1>Looks like you are Offline ! Please check your internet connection.</h1>
  }


  return resto.length === 0 ? <Shimmer /> : (
    <>
      <div className='container m-auto'>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center my-5'>
          <div className='flex mb-3'>
            <input type='text' className='w-[500px] border-b-2 focus:ring-2' value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder='Search restaurants...' />

            <button className='bg-gray-200 rounded-md ml-9 py-2 px-9 font-medium text-[20px] hover:shadow-lg'
              onClick={() => {
                const filterResto = allRestaurants.filter((res) => res.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilterResto(filterResto)
              }}>
              Serach</button>
          </div>

          <button className='bg-gray-200 px-9 py-3 rounded-md' onClick={() => {
            const filtered = allRestaurants.filter(res => parseFloat(res.avgRating) > 4.3);
            setFilterResto(filtered);
          }}>
            Top Rated Restaurant
          </button>
        </div>

        <div className="cards-contain grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
          {filterResto.map((restos) => (
            <Link className='cards border rounded-lg overflow-hidden p-2 hover:shadow-2xl' key={restos.id} to={`/city/mumbai/${restos.id}`}> <RestoCards resData={restos} /></Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
