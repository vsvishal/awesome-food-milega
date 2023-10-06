import React from "react";
import Footer from "./Footer";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="m-2 p-2 font-bold text-3xl">Contact Us</h1>
      <form>
        <div className="flex flex-col">
          <input
            type="text"
            className="p-2 mx-4 my-1 w-96 rounded-sm"
            placeholder="Full name"
          />
          <input
            type="email"
            className="p-2 mx-4 my-1 w-96 rounded-sm"
            placeholder="Email address"
          />
          <textarea
            cols="30"
            rows="6"
            placeholder="message"
            className="mx-4 my-1 p-2 w-96 rounded-sm"
          ></textarea>
          <button className="mx-4 my-1 bg-blue-600 w-96 p-2 font-bold rounded-sm text-xl">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
