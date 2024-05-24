import useFetch from "./useFetch";
import { useState, useEffect } from "react";
import "./App.scss";
import dividerDesk from "/pattern-divider-desktop.svg";
import dividerMobile from "/pattern-divider-mobile.svg";
import dice from "/icon-dice.svg";

const Advice = () => {
  const randomAdviseApiURl = "https://api.adviceslip.com/advice";

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    useFetch(randomAdviseApiURl, setIsLoading, setIsError, setData);
  }, []);

  return (
    <main className="adviceContainer">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1>There was an error...</h1>
      ) : (
        <>
          <h2 className="adviceID">Advice #{data.slip.id}</h2>
          <h1>“{data.slip.advice}”</h1>
        </>
      )}

      <div className="dividerWrapper">
        <img
          srcSet={`${dividerMobile} 295w, ${dividerDesk} 444w`}
          sizes="(max-width: 600px) 295px, 444px"
          src={dividerDesk}
          alt="divider"
        ></img>
      </div>

      <button
        onClick={() =>
          useFetch(randomAdviseApiURl, setIsLoading, setIsError, setData)
        }
      >
        <img src={dice} alt="generate advise" />
      </button>
    </main>
  );
};
export default Advice;
