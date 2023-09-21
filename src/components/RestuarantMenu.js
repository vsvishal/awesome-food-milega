import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

function RestuarantMenu() {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  // console.log("menu", resInfo);
  const { name, areaName, avgRating, costForTwoMessage, cuisines, locality } =
    resInfo?.cards?.[0].card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards?.[2].groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card
      ?.card || {};
  // console.log("itemCards ", itemCards);
  // console.log(
  //   "resInfo details",
  //   resInfo?.cards?.[2].groupedCard?.cardGroupMap?.REGULAR?.cards
  // );

  const categoryData =
    resInfo?.cards?.[2].groupedCard?.cardGroupMap?.REGULAR?.cards;
  const categories = categoryData?.filter(
    (c) =>
      c.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log("categories ", categories);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      <div className="text-center m-4">
        <h1 className="font-bold text-2xl">{name}</h1>
        <h3 className="font-bold text-lg mb-5">
          {cuisines?.join(", ")} - {costForTwoMessage}
        </h3>
        {categories.map((category) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
          />
        ))}
      </div>
    </div>
  );
}

export default RestuarantMenu;
