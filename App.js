import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ContactUs from "./src/components/ContactUs";
import AboutUs from "./src/components/AboutUs";
import ErrorPage from "./src/components/ErrorPage";
import RestaurantMenu from "./src/components/RestaurantMenu";
// import Grocery from "./src/components/Grocery";

const Grocery = lazy(() => {
  return import("./src/components/Grocery.js");
});
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet></Outlet>
    </div>
  );
};
// set configuration for routing
const appRouting = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouting}></RouterProvider>);
