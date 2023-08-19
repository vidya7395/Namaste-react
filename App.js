import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import ResContainer from "./src/components/RestaurantContainer";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ContactUs from "./src/components/ContactUs";
import AboutUs from "./src/components/AboutUs";
import ErrorPage from "./src/components/ErrorPage";
const AppLayout = () => {
  return (
    <div className="container">
      <Header />
      {/* <Body /> */}
      <Outlet></Outlet>
    </div>
  );
};
// set configuration for routing
const appRouting = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
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
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouting}></RouterProvider>);
