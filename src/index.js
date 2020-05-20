import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider as WeatherProvider } from './contexts/weather/context';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
