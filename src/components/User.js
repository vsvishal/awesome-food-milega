import { useEffect } from "react";

const User = () => {
  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       console.log("useEffect setInterval() inside User.js");
  //     }, 1000);
  //     console.log("useEffect inside User.js");

  //     return () => {
  //       clearInterval(timer);
  //       console.log("useEffect unmount Return");
  //     };
  //   }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="m-4 p-6 w-[250px] rounded-lg bg-gray-800">
        <h2>Name: Vishal</h2>
        <h3>Location: Pune</h3>
        <h4>Contact: sharmavishal.7979@gmail.com</h4>
      </div>
    </div>
  );
};

export default User;
