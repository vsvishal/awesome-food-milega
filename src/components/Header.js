import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import React from "react";
import logo from "../images/Awesome.png";

function Header() {
  // This btnName var is constant, react is not changing its value, actually during rerender, it creates new var,
  // since again Header component is loaded
  const [btnName, setBtnName] = useState("Login");
  console.log("Header component");
  const onlineStatus = useOnlineStatus();
  // const { loggedInUser } = useContext(UserContext);
  // console.log("dataContext: ", dataContext);

  // Suscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems ", cartItems);

  return (
    <div className="flex justify-between shadow-lg items-center sticky top-0 bg-[#222229] z-20">
      <div className="m-3">
        <img className="w-36 h-20 rounded-md" src={logo} alt="logo" />
      </div>
      <div className="flex">
        <ul className="flex m-4 p-4 ">
          <li className="px-4 hover:text-yellow-400">
            Online status: {onlineStatus === true ? "🟢" : "🔴"}{" "}
          </li>
          <li className="px-4 text-white hover:text-yellow-400">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              Home
            </Link>{" "}
          </li>
          <li className="px-4 text-white hover:text-yellow-400">
            <Link to={"/about"} style={{ textDecoration: "none" }}>
              About Us
            </Link>
          </li>
          <li className="px-4 hover:text-yellow-400">
            <Link to={"/contact"} style={{ textDecoration: "none" }}>
              Contact Us
            </Link>
          </li>
          <li className="px-4 hover:text-yellow-400">
            <Link to={"/grocery"} style={{ textDecoration: "none" }}>
              Grocery
            </Link>
          </li>
          <li className="px-4 hover:text-yellow-400">
            <Link to={"/cart"} style={{ textDecoration: "none" }}>
              {`🛒${cartItems.length}`}
            </Link>
          </li>
          <button
            className="px-4 bg-orange-600 py-1 rounded-sm"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
          {/* <li className="px-4 font-bold">{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
}

export default Header;
