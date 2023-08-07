import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const JSXheading = <h1 tabIndex="1">Using JSX 🚀</h1>;

/**
 * REACT FUNCTIONAL COMPONENT
 * Title component
 */
const Title = () => {
  return <h1 className="title">Namaste React using JSX 🚀.</h1>;
};
/**
 * Heading Component
 *       &
 * Component composition
 */

const Heading = () => {
  return (
    <div id="container">
      <Title />
      <h2 className="heading">Namaste React Functional Component</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(JSXheading);
root.render(<Heading />);
