import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    // const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(true)


    if (resInfo === null) return <Shimmer />

    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card.itemCards;
    // console.log(itemCards);


    // const restaurantInfoCard = resInfo?.cards[2]?.card?.card?.info;
    // console.log('info', restaurantInfoCard)
    // const name = resInfo?.cards[0]?.card?.card?.text || "Restaurant";
    const title = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.title
    // const costForTwoMessage = restaurantInfoCard?.costForTwoMessage;

    const info = resInfo?.cards?.[2]?.card?.card?.info;
    const { costForTwoMessage, name, avgRating, totalRatingsString, cuisines } = info || {};
    
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(c => c.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log('categories',categories)

    return (
        <>
            <div className="my-4">
                <div className="w-[800px] my-0 mx-auto border rounded-lg p-3">
                    <h1 className="text-2xl font-bold">{name}</h1>
                    <p className="font-semibold">
                        <span>⭐{avgRating}({totalRatingsString})</span>
                        <span>{costForTwoMessage}</span>
                    </p>
                    <p>{Array.isArray(cuisines) ? cuisines.join(", ") : 'Cuisines not available'}</p>
                </div>
                
                <div className="text-center">{categories.map((category,index)=>
                // controlled component
                    <RestaurantCategory
                    key={index} 
                    data={category?.card?.card}
                    showItem={index === showIndex ? true : false}
                    setShowIndex={()=>setShowIndex(index)}/>)}</div>

            </div>
        </>
    );
};
export default RestaurantMenu;