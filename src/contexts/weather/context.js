import React, { useState, useEffect, Children } from 'react';

import CardLoading from '../../components/CardLoading';

const WeatherContext = React.createContext({});

const WeatherProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = async (city) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2062a07848dd3b34411040b1c4dc2c72`
      );
      const data = await res.json();
      if (Number(data.cod) >= 400) {
        setError(data.message);
        setLoading(false);
      } else {
        setData(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData('London');
  }, []);

  if (isLoading) return <CardLoading />;

  // Extraigo la ultima letra del nombre del icono, que trae una "n" si es de noche y "d" si es de dia
  const momentDay = data.weather[0].icon.substr(-1);
  const theme = momentDay === 'd' ? 'day' : 'night';

  return (
    <WeatherContext.Provider value={{ data, theme, getData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider as Provider, WeatherContext as default };
