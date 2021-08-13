import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useForecast } from "../hooks/useForecast";
import { Button, Container } from "../../shared/components";

const _Button = styled(Button)`
  margin: 0 0 16px;
`;

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ForecastScreen = () => {
  const location = useLocation();
  const isWram = location.pathname.toLowerCase() === "warm";
  const { data, loading, error, fetchForecast } = useForecast(isWram);

  return (
    <Container>
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
                <_Button>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.skyscanner.net/"
                  >
                    ✈️ Let&apos;s gooo
                  </a>
                </_Button>
                <_Button onClick={fetchForecast}>What else you got?</_Button>
              </div>
            </>
          )}
          {loading && <h2 className="title has-text-centered">Searching...</h2>}
          {error && (
            <ErrorWrapper>
              <h2 className="title has-text-centered">
                Oops, I did it again...
              </h2>
              <_Button onClick={fetchForecast}>Try again!</_Button>
            </ErrorWrapper>
          )}
        </div>
      </div>
    </Container>
  );
};
export default ForecastScreen;
