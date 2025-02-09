import React, { useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCards from "./RestaurantCards";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import debounce from "lodash.debounce";
import resObj from "../utils/mockData";

const Body = () => {
  const [ListofRestaurants, setListofRestaurants] = useState(resObj);
  const [filteredRest, setfilteredRes] = useState(resObj);
  const [searchText, setsearchText] = useState("");
  const [error, setError] = useState(null);

  // Check online status
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return <h1 className="text-center text-red-600 mt-10 text-2xl font-semibold">⚠️ Looks like you are offline!</h1>;

  // Debounce search input
  const handleSearch = debounce((value) => {
    const filteredRestaurant = ListofRestaurants.filter(
      (res) =>
        res.info.name.toLowerCase().includes(value.toLowerCase()) ||
        res.info.cuisines.some((cuisine) =>
          cuisine.toLowerCase().includes(value.toLowerCase())
        )
    );

    setfilteredRes(filteredRestaurant);
  }, 300);

  // Handle search input change
  const onSearchChange = (e) => {
    setsearchText(e.target.value);
    handleSearch(e.target.value);
  };

  return error ? (
    <h1 className="text-center text-red-600 mt-10 text-xl">{error}</h1>
  ) : ListofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body p-4">
      {/* Search & Filter Section */}
      <div className="filter flex flex-col md:flex-row items-center justify-center gap-4 p-4">
        
        {/* Search Bar */}
        <div className="search relative">
          <input
            type="text"
            className="border border-gray-300 px-4 py-2 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="🔍 Search restaurants..."
            value={searchText}
            onChange={onSearchChange}
          />
          <button
            className="ml-3 px-4 py-2 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-600 transition duration-300"
            onClick={() => handleSearch(searchText)}
          >
            Search
          </button>
        </div>

        {/* Top Rated Restaurants Button */}
        <button
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition duration-300"
          onClick={() => {
            const filterList = ListofRestaurants.filter(
              (res) => res.info?.avgRating > 4
            );
            setfilteredRes(filterList);
          }}
        >
          🌟 Top Rated
        </button>
      </div>

      {/* Display Restaurants in a Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {filteredRest.map((restaurant) => (
          <Link key={restaurant?.info.id} to={"/restaurants/" + restaurant?.info.id}>
            <RestaurantCards resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
