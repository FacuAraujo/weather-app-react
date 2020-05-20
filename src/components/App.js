import React, { useEffect, useState } from 'react';

import AppLayout from '../layout/AppLayout';
import Header from './Header';
import Graphics from './Graphics';
import InfoContainer from './InfoContainer';
import WeatherContext from '../contexts/weather/context';

const App = () => {
  const data = React.useContext(WeatherContext);

  const {
    weather: [{ description, id }],
    main: { temp, feels_like },
    name,
    sys: { country },
  } = data.data;

  return (
    <AppLayout>
      <Header title={description} />
      <main>
        <Graphics code={id} />
        <InfoContainer
          temp={temp}
          country={country}
          city={name}
          feelsLike={feels_like}
        />
      </main>
    </AppLayout>
  );
};

export default App;
