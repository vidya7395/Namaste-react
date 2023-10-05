import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ContactUs from "./src/components/ContactUs";
import AboutUs from "./src/components/AboutUs";
import ErrorPage from "./src/components/ErrorPage";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { UserContext } from "./src/utils/userContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/Store/appStore";
import Cart from "./src/components/Cart";
// import Grocery from "./src/components/Grocery";

const Grocery = lazy(() => {
  return import("./src/components/Grocery.js");
});
const AppLayout = () => {
  // authentication code written
  const [userName, setUsername] = useState([]);
  useEffect(() => {
    // make API call and authenticate and get the user info
    const data = {
      name: "Vidya Krishnani",
    };
    setUsername(data.name);
  }, []);
  return (
    <div>
      <Provider store={appStore}>
        <UserContext.Provider value={{ userLoggedIn: userName, setUsername }}>
          <Header />
          <Outlet></Outlet>
        </UserContext.Provider>
      </Provider>
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
        path: "/cart",
        element: <Cart />,
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
