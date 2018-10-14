import moment from 'moment';
import transformWeather from './transformWeather';

/** Filter data for hours 6:00am, 12pm and 18pm */
const transformForecast = data => (
  data.list.filter(item => (
    moment.unix(item.dt).utc().hour() === 6 ||
    moment.unix(item.dt).utc().hour() === 12 ||
    moment.unix(item.dt).utc().hour() === 18
  )).map(item => (
    {
      weekDay: moment.unix(item.dt).format('dddd'),
      hour: moment.unix(item.dt).utc().hour(),
      data: transformWeather(item)
    }
  ))
);

export default transformForecast;