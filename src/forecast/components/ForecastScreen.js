import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useForecast } from "../hooks/useForecast";
import { Button, Container, Title, WebLink } from "../../shared/components";

const _Button = styled(Button)`
  margin: 0 0 16px;
`;

const LinkButton = styled(_Button)`
  width: 100%;
`;

const _Title = styled(Title)`
  text-align: center;
  margin: 0 0 24px;
`;

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-around;
  font-weight: bold;
  padding: 20px;
  background-color: white;
  border-radius: 4px;
  margin: 0 0 20px;
`;

const _Container = styled(Container)`
  padding: 3em;
`;

const CurrentWeather = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const ForecastScreen = () => {
  const location = useLocation();
  const isWram = location.pathname.toLowerCase() === "warm";
  const { data, loading, error, fetchForecast } = useForecast(isWram);

  return (
    <_Container>
      {data && !error && !loading && (
        <>
          <_Title>
            {data.name}, {data.country} seems nice at the moment!
          </_Title>
          <CurrentWeather>
            <p>{data.temperature}</p>
            <p>{data.wind}</p>
            <p>{data.description}</p>
          </CurrentWeather>
          <p className="forecast">
            Here&apos;s how it&apos;s looking for the next 3 days
          </p>
          <Card>
            {data.forecast.map((place) => (
              <div key={`${place.day}`}>
                <p>Day {place.day}</p>
                <p>{place.temperature}</p>
                <p>{place.wind}</p>
              </div>
            ))}
          </Card>
          <WebLink href="https://www.skyscanner.net/">
            <LinkButton>✈️ Let&apos;s gooo</LinkButton>
          </WebLink>
          <_Button onClick={fetchForecast}>What else you got?</_Button>
        </>
      )}
      {loading && <h2 className="title has-text-centered">Searching...</h2>}
      {error && (
        <ErrorWrapper>
          <h2 className="title has-text-centered">Oops, I did it again...</h2>
          <_Button onClick={fetchForecast}>Try again!</_Button>
        </ErrorWrapper>
      )}
    </_Container>
  );
};
export default ForecastScreen;
