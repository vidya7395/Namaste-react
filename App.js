import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import ResContainer from "./src/components/RestaurantContainer";
const AppLayout = () => {
  return (
    <div className="container">
      <Header />
      <ResContainer />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
