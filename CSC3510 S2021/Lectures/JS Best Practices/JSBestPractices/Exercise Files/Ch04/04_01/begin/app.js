'use strict';

import distanceTo from './modules/distanceTo.js';

const userPrefs = {
  city: 'Chicago',
  lat: 41.878113,
  lon: -87.629799,
};

const testLocation = {
  city: 'Alexandria',
  lat: 31.2156400,
  lon: 29.9552700,
};

console.log(distanceTo(
  userPrefs.lat, 
  userPrefs.lon, 
  testLocation.lat,
  testLocation.lon, 
  'M')
);
