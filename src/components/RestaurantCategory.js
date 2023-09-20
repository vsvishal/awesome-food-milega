import ItemList from "./ItemList";

function RestaurantCategory({ data }) {
  console.log("data: ", data);
  return (
    // Accordion Header
    <div className="w-6/12 mx-auto my-1.5 bg-gray-600 p-2 rounded-sm">
      <div className="flex justify-between">
        <span className="font-bold ">
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      <ItemList items={data.itemCards} />
    </div>
    // Acoordion Body
  );
}

export default RestaurantCategory;
