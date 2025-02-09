import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  // Default to an empty array if items is undefined
  const dispatch = useDispatch();
  const [itemQuantities, setItemQuantities] = useState({});

  const handleAddItem = (item) => {
    const itemId = item.id;
    const currentQuantity = itemQuantities[itemId] || 0;

    dispatch(addItem(item));

    const newQuantity = currentQuantity + 1;
    setItemQuantities((prevState) => ({
      ...prevState,
      [itemId]: newQuantity,
    }));
  };

  const handleRemoveItem = (item) => {
    const itemId = item.id;
    const currentQuantity = itemQuantities[itemId] || 0;

    if (currentQuantity === 1) {
      dispatch(removeItem(item));
      setItemQuantities((prevState) => {
        const { [itemId]: deletedItem, ...newQuantities } = prevState;
        return newQuantities;
      });
    } else if (currentQuantity > 1) {
      const newQuantity = currentQuantity - 1;
      setItemQuantities((prevState) => ({
        ...prevState,
        [itemId]: newQuantity,
      }));
      dispatch(removeItem(item));
    }
  };

  useEffect(() => {
    console.log("Item quantities updated:", itemQuantities);
  }, [itemQuantities]);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between relative"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.name}</span>
              <span>
                - ₹{item.price ? item.price / 100 : item.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.description}</p>
          </div>
          <div className="w-3/12 p-4 relative">
            <img
              src={CDN_URL + item.imageId}
              className="w-full"
              alt={item.name}
            />
            <div className="absolute top-0 right-0 flex items-center">
              <button
                className="p-2 rounded-lg bg-black text-white shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                Add
              </button>
              {itemQuantities[item.id] > 0 && (
                <div className="flex items-center">
                  <button
                    className="p-2 mx-2 rounded-lg bg-red-500 text-white shadow-lg"
                    onClick={() => handleRemoveItem(item)}
                  >
                    -
                  </button>
                  <span>{itemQuantities[item.id]}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
