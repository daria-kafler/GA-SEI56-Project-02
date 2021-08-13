import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import cities from "./citiesLists";

const getRandomCity = (warm) => {
  const relevantCities = cities.filter(({ cool }) => (warm ? !cool : cool));
  return relevantCities[Math.floor(Math.random() * relevantCities.length)];
};

const fetchData = async (city) =>
  await axios.get(`https://goweather.herokuapp.com/weather/${city}`);

export const useForecast = (warm) => {
  const [forecast, setForecast] = useState({
    temperature: "",
    wind: "",
    description: "",
    forecast: [],
  });

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const fetchForecast = useCallback(() => {
    const city = getRandomCity(warm);
    setError();
    setLoading(true);
    fetchData(city.name)
      .then(({ data }) => {
        setForecast({ ...data, ...city });
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [warm]);

  useEffect(() => {
    fetchForecast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data: forecast, error, loading, fetchForecast };
};
