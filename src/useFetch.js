import { useState, useEffect } from "react";

const useFetch = (url, setIsLoading, setIsError, setData) => {
  // change name
  const fetchData = async () => {
    try {
      const resp = await fetch(url);

      if (!resp.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      // change to response
      const response = await resp.json();
      setData(response);
    } catch (error) {
      setIsError(true);
      // console.log(error);
    }
    // hide loading
    setIsLoading(false);
  };
  // invoke fetch data
  fetchData();
};

export default useFetch;
