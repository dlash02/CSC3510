'use strict';

const conditions = {
  'coord': {
    'lon': -122.08,
    'lat': 37.39
  },
  'weather': [
    {
      'id': 800,
      'main': 'Clear',
      'description': 'clear sky',
      'icon': '01d'
    }
  ],
  'base': 'stations',
  'main': {
    'temp_f': 62.5,
    'feels_like': 62.1,
    'temp_min': 61.3,
    'temp_max': 68.2,
    'pressure': 1023,
    'humidity': 100,
    'temp_c': 16.9
  },
  'visibility': 16093,
  'wind': {
    'speed': 1.5,
    'deg': 350
  },
  'clouds': {
    'all': 1
  },
  'dt': 1560350645,
  'sys': {
    'type': 1,
    'id': 5122,
    'message': 0.0139,
    'country': 'US',
    'sunrise': 1560343627,
    'sunset': 1560396563
  },
  'timezone': -25200,
  'id': 420006353,
  'name': 'Mountain View',
  'cod': 200,
};

const tempF = conditions.main.temp_f;
const tempC = conditions.main.temp_c;
const humidity = conditions.main.humidity;
const place = conditions.name;

const abbr = ['\u00B0 C', '\u00B0 F'];
const celsiusAbbr = abbr[0];
const fahrenheitAbbr = abbr[1];

console.log(place);
console.log(tempC + celsiusAbbr);
console.log(tempF + fahrenheitAbbr);
console.log(humidity + "% humidity");
