import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/redux/cartSlice";
import React from "react";
import Footer from "./Footer";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="m-2 p-2 bg-red-600 rounded-md"
          onClick={clearCartHandler}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>Your cart is empty. Please add items to the card</h1>
        )}
        <ItemList items={cartItems} />
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
