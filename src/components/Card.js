import { CDN_URL } from "../utils/constants";

function Card({ restaurant }) {
  // console.log("restaurant: ", restaurant);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, locality } =
    restaurant.info;

  // const cardStyle = {
  //   backgroundColor: "#595959",
  // };
  return (
    <div className="m-4 p-4 w-[300px] rounded-lg bg-gray-800 hover:bg-gray-600 h-[92%] sticky">
      <img
        className="rounded-lg h-40 w-80"
        src={CDN_URL + cloudinaryImageId}
        alt="food"
      />
      <h3 className="font-bold text-lg my-2">{name} </h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>⭐️ {avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{locality}</h4>
      <h4>21 minutes</h4>
    </div>
  );
}

export default Card;
