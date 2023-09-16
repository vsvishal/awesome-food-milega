import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestuarantMenu from "./components/RestuarantMenu";
import Shimmer from "./components/Shimmer";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

// router configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestuarantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// // React Element
// const title = <h2>I am title React element</h2>;

// // React Component
// const TitleComponent = () => {
//   return <h3>I am Titile Component</h3>;
// };

// const HeadingComponent = () => {
//   return (
//     <>
//       <h1 className="head">This is Heading Component</h1>
//       {title}
//       <TitleComponent />
//       <p>Lorem ipsum dolor sit amet.</p>
//     </>
//   );
// };
