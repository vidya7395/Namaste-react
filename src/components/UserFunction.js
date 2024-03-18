import { useEffect, useState } from "react";
import { USER_INFO_API } from "../utils/constant";

const UserFunction = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  const getUserInfo = async () => {
    const userData = await fetch(USER_INFO_API);
    const json = await userData.json();
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <>
      <div className="card">
        <p>Count = {count}</p>
        <p>Count = {count2}</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Set count
        </button>
        <p>This is functional component card</p>
        <div>Name: {name}</div>
        <div>Instagram handle: vidhyamarch7</div>
      </div>
    </>
  );
};
export default UserFunction;
