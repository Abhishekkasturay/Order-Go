import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ resData, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  const itemsLength = resData && resData.items ? resData.items.length : 0;

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {resData ? `${resData.restaurant} (${itemsLength})` : "Loading..."}
          </span>
          <span>⬇️</span>
        </div>
        {showItems && resData && resData.items && (
          <ItemList items={resData.items} />
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
