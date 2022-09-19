import { useState, useEffect } from "react";
import Home from "../pages/home";
import LoadingStatus from "../components/loading-status";

const PreLoader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true); //state of the loading

  const handleLoading = () => {
    setIsLoading(false);
  }; // set loading to false once the load is over

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  // return !isLoading ? children : <LoadingStatus />; //JSX return the status accoarding to the loading status
  return <LoadingStatus />;
};

export default PreLoader;