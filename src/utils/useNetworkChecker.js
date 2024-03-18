import { useEffect, useState } from "react";

const useNetworkChecker = () => {
  const [checkNetwork, setCheckNetwork] = useState(true);
  useEffect(() => {
    fetchNetworkData();
  }, []);
  const fetchNetworkData = () => {
    window.addEventListener("offline", (event) => {
      setCheckNetwork(false);
    });
    window.addEventListener("online", (event) => {
      setCheckNetwork(true);
    });
  };
  return checkNetwork;
};

export default useNetworkChecker;
