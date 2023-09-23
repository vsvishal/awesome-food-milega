import { useState } from "react";
import ItemList from "./ItemList";

function RestaurantCategory({ data, showItems, setShowIndex }) {
  // const [showItems, setShowItems] = useState();
  const handlerClick = () => {
    setShowIndex();
    // setShowItems(!showItems);
  };
  // console.log("data: ", data);
  return (
    // Accordion Header
    <div className="w-8/12 mx-auto my-1.5 bg-gray-700 p-2 rounded-sm">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handlerClick}
      >
        <span className="font-bold ">
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      {/* Acoordion Body */}
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
}

export default RestaurantCategory;
