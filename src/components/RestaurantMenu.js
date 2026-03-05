import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
// import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const resInfo = useRestaurantMenu();
  const [showIndex, setShowIndex] = useState()

  if (!resInfo) return <Shimmer />;

  console.log(resInfo, "mock data");

  const {
    name,
    cuisines = [],
    costForTwoMessage,
    offers = [],
    sla,
    menu,
  } = resInfo?.data || {};

  const categories = menu?.categories || [];
  console.log(categories, 'category')

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      {/* Restaurant Info */}
      <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-2">
        {name}
      </h1>

      <p className="text-sm sm:text-base text-gray-600">
        {cuisines.join(", ")}
      </p>

      <p className="text-sm sm:text-base mt-1">
        {costForTwoMessage}
      </p>

      <span className="font-semibold text-sm sm:text-base block mt-1">
        ⏱ {sla?.deliveryTime} mins
      </span>

      {/* Offers Section */}
      {offers.length > 0 && (
        <div className="mt-6">
          <h3 className="font-bold text-lg sm:text-xl mb-3">
            Deals for you
          </h3>

          <div className="space-y-2">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="bg-gray-100 p-3 rounded-lg text-sm sm:text-base"
              >
                <p>
                  {offer.info}
                  <span className="text-green-600 ml-2 font-medium">
                    (USE: {offer.couponCode})
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Categories */}
      <div className="mt-8 space-y-4">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category.id}
            data={category}
            showItem={index === showIndex}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>

    </div>
  );
};

export default RestaurantMenu;
