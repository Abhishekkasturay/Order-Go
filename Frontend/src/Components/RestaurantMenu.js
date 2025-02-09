import React, { useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import mockObj from "../utils/mockMenuData";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const selectedRestaurant = mockObj.find((rest) => rest.id === resId);

  const [showIndex, setShowIndex] = useState(null);

  if (!selectedRestaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <h1 className="font-bold my-6 text-2xl">
          {selectedRestaurant.restaurant}
        </h1>
        <RestaurantCategory
          key={selectedRestaurant.id}
          resData={selectedRestaurant}
          showItems={showIndex === 0}
          setShowIndex={() => setShowIndex(0)}
        />
      </div>
    </div>
  );
};

export default RestaurantMenu;
