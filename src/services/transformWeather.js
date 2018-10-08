import { SUN, WINDY } from '../constants/states';

const getWeatherState = weather => {
  return SUN;
}

const transformWeather = (weatherData) => {
  const { humidity, temp } = weatherData.main;
  const { speed } = weatherData.wind;
  const weatherState = getWeatherState('ff');
  const data = {
    humidity,
    temperature: Math.floor(temp),
    weatherState,
    wind: `${speed} m/s`
  }
  return data;
}

export default transformWeather;