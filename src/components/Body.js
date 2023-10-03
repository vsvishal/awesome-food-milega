import Card, { withPromotedLabel } from "./Card";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withDiscountLabel } from "./Card";
import UserContext from "../utils/UserContext";
import React from "react";
import { RESTAURANTS_URL } from "../utils/constants";
import Footer from "./Footer";

function Body() {
  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardDiscount = withDiscountLabel(Card);
  // const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    console.log("useEffect() called");

    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RESTAURANTS_URL);

      const jsonData = await data.json();
      // console.log("jsonData: ", jsonData);
      const restaurantList =
        jsonData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      // console.log("restaurantList : ", restaurantList);
      setRestaurants(restaurantList);
      setAllRestaurants(restaurantList);
    } catch (error) {
      console.log(error);
      // <Error />;
    }
  };

  console.log("I am inside body");

  const highestRatingResHandler = (resDataList) => {
    let filteredRes = resDataList.filter((rest) => rest.info.avgRating >= 4.2);
    setRestaurants(filteredRes);
  };

  const searchRestHandler = () => {
    const searchRest = allRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestaurants(searchRest);
  };

  // Conditional Rendering
  // if (restaurants.length === 0) {
  //   return <Shimmer />;
  // }
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are Offline !! Please check your internet connection
      </h1>
    );
  }

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex items-center justify-center">
        <div className="p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="px-6 py-1 text-black sticky top-0"
            placeholder="Search Restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-1 bg-green-600"
            onClick={searchRestHandler}
          >
            Search
          </button>
        </div>
        <div className="p-4">
          <button
            className="px-4 py-1 bg-blue-600 rounded-sm"
            onClick={() => highestRatingResHandler(allRestaurants)}
          >
            Top Rated Restraunt
          </button>
        </div>
        {/* <div className="mx-7">
          <label htmlFor="usrname">User Name : </label>
          <input
            className="rounded-sm p-1 text-black"
            id="usrname"
            placeholder="User name"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div> */}
      </div>
      <div className="flex flex-wrap justify-center">
        {restaurants?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            style={{ textDecoration: "none", color: "white" }}
          >
            {restaurant.info.aggregatedDiscountInfoV3 ? (
              <RestaurantCardDiscount restaurant={restaurant} />
            ) : (
              <Card restaurant={restaurant} />
            )}
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Body;
