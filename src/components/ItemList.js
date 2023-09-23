import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/redux/cartSlice";

function ItemList({ items }) {
  // console.log("items: ", items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        {
          return (
            <div
              className="text-left shadow-xl my-2 p-2 flex"
              key={item.card.info.id}
            >
              <div className="w-9/12">
                <div>
                  {item.card.info.itemAttribute.vegClassifier === "VEG"
                    ? "🟩 VEG"
                    : "🟥 NONVEG"}
                </div>
                <div>
                  <span>{item.card.info.name}</span>
                  <div>
                    ₹{" "}
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </div>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
              </div>
              <div className="w-3/12 p-4">
                <div className="absolute">
                  <button
                    className="bg-green-500 p-2 shadow-sm"
                    onClick={() => handleAddItem(item)}
                  >
                    ADD +
                  </button>
                </div>
                <img
                  src={CDN_URL + item.card.info.imageId}
                  className="w-full"
                />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default ItemList;
