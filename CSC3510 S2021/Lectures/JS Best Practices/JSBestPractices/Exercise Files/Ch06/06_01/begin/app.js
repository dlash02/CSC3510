'use strict';

const selection = 'bright';

const palettes = {
  bright: ['yellowgreen', 'fuchsia'],
  neutral: ['burlywood', 'slategray'],
  chill: ['slateblue', 'palevioletred'],
};

const selectedColors = eval('palettes.' + selection);
console.log('Color 1:', selectedColors[0]);
console.log('Color 2:', selectedColors[1]);

setTimeout(
  "document.querySelector('body').classList.add(selection);",
  2000
);