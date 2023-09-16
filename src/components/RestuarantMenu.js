import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

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

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      <div className="menu">
        <h1>{name}</h1>
        <h3>
          {cuisines?.join(", ")} - {costForTwoMessage}
        </h3>
        <h3>{locality}</h3>
        <h2>Menu</h2>
        <ul>
          {itemCards?.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} -{" ₹"}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RestuarantMenu;
