import React from "react";
import { useLocation } from "react-router-dom";
import { useForecast } from "../hooks/useForecast";

const ForecastScreen = () => {
  const location = useLocation();
  const isWram = location.pathname.toLowerCase() === "warm";
  const { data, loading, error, fetchForecast } = useForecast(isWram);

  return (
    <section>
      <div className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            {data && !error && !loading && (
              <>
                <h1 className="title is-1 has-text-centered">
                  {data.name}, {data.country} seems nice at the moment!
                </h1>
                <div className="container title is-2 has-text-centered">
                  <div className="current-weather">
                    <p>{data.temperature}</p>
                    <p>{data.wind}</p>
                    <p>{data.description}</p>
                    <br />
                  </div>
                </div>
                <p className="forecast">
                  Here&apos;s how it&apos;s looking for the next 3 days
                </p>
                <div className="card">
                  <div className="card-content">
                    {data.forecast.map((place) => (
                      <div key={`${place.day}`}>
                        <p>Day {place.day}</p>
                        <p>{place.temperature}</p>
                        <p>{place.wind}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="go-buttons">
                  <button className="button is-info is-medium">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.skyscanner.net/"
                    >
                      ✈️ Let&apos;s gooo
                    </a>
                  </button>
                  <button
                    onClick={fetchForecast}
                    className="button is-info is-medium"
                  >
                    What else you got?
                  </button>
                </div>
              </>
            )}
            {loading && (
              <h2 className="title has-text-centered">searching...</h2>
            )}
            {error && (
              <h2 className="title has-text-centered">
                Oops, I did it again...
              </h2>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ForecastScreen;
