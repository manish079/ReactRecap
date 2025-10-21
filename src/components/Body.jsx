import { RestaurantCard } from "./RestaurantCard";
import resList from "../utils/mockData.json";
import { useState } from "react";

export const Body = () => {
  const allRestFilteredList =
    resList?.data?.cards[1]?.card.card.gridElements.infoWithStyle.restaurants;

  const [topRatedRestaurants, setTopRatedRestaurants] =
    useState(allRestFilteredList);

  const getTopRatedRestaurants = () => {
    console.log("top rated restaurants clicked");

    const filteredTopRatedRestaurants = allRestFilteredList.filter(
      (rest) => rest.info.avgRating > 4.5
    );

    setTopRatedRestaurants(filteredTopRatedRestaurants);
  };

  return (
    <div className="body">
      <div className="search-container flex">
        <div className="search">Search</div>
        <button
          className="search-btn"
          onClick={() => {
            getTopRatedRestaurants();
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container flex">
        {topRatedRestaurants?.map((restaurent) => (
          <RestaurantCard key={restaurent.info.id} resData={restaurent.info} />
        ))}
      </div>
    </div>
  );
};
