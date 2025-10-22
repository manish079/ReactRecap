import { RestaurantCard } from "./RestaurantCard";
import resList from "../utils/mockData.json";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";

export const Body = () => {
  //   const allRestFilteredList =
  //     resList?.data?.cards[1]?.card.card.gridElements.infoWithStyle.restaurants;

  //   const [allRestFilteredList, setAllRestFilteredList] = useState([]);

  //   const [topRatedRestaurants, setTopRatedRestaurants] =
  //     useState(allRestFilteredList);

  const [topRatedRestaurants, setTopRatedRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const getTopRatedRestaurants = () => {
    const filteredTopRatedRestaurants = topRatedRestaurants.filter(
      (rest) => rest.info.avgRating > 4.5
    );

    setTopRatedRestaurants(filteredTopRatedRestaurants);
  };

  // It executes after completely render this component
  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    // fetch returns promise
    const restResponse = await fetch(
      "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api"
    );

    const jsonResp = await restResponse.json();

    setTopRatedRestaurants(
      jsonResp?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        .restaurants
    );
    setFilteredRestaurants(
      jsonResp?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        .restaurants
    );
  };

  const getSearchFilteredRest = () => {
    const filteredRest = topRatedRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    setFilteredRestaurants(filteredRest);
  };

  return topRatedRestaurants.length === 0 ? (
    <Shimmer len={topRatedRestaurants.length} />
  ) : (
    <div className="body">
      <div className="search-container flex">
        <div className="search">
          <input
            type="text"
            className="search-input"
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                getSearchFilteredRest();
              }
            }}
          />
          <button className="search-btn" onClick={getSearchFilteredRest}>
            Search
          </button>
        </div>
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
        {filteredRestaurants?.map((restaurent) => (
          <RestaurantCard key={restaurent.info.id} resData={restaurent.info} />
        ))}
      </div>
    </div>
  );
};
