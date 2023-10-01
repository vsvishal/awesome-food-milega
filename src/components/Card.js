import { CDN_URL } from "../utils/constants";
import React from "react";

function Card({ restaurant }) {
  // console.log("restaurant: ", restaurant);
  // const { loggedInUser } = useContext(UserContext);

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    locality,
    sla,
  } = restaurant.info;

  // const cardStyle = {
  //   backgroundColor: "#595959",
  // };
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[300px] rounded-lg bg-gray-800 hover:bg-gray-600 h-96 sticky"
    >
      <img
        className="rounded-lg h-40 w-80"
        src={CDN_URL + cloudinaryImageId}
        alt="food"
      />
      <h3 className="font-bold text-lg my-2">{name} </h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>
        ⭐️{avgRating} &nbsp; {costForTwo}
      </h4>
      <h4>{locality}</h4>
      <h4>
        🕑 {sla.deliveryTime + " " + "mins"} &nbsp; 🚲 {sla.lastMileTravel} kms
      </h4>
      {/* <h5>{loggedInUser}</h5> */}
    </div>
  );
}

// Higher order component
// Input - Card => CardPromoted

export const withDiscountLabel = (Card) => {
  return (props) => {
    const { header } = props.restaurant.info.aggregatedDiscountInfoV3;
    return (
      <div>
        <label className="absolute bg-black text-white mx-2 my-0.4 p-1 rounded-lg z-10">
          {props.restaurant.info.aggregatedDiscountInfoV3.header +
            " " +
            props.restaurant.info.aggregatedDiscountInfoV3.subHeader}
        </label>
        <Card {...props} />
      </div>
    );
  };
};

export default Card;
