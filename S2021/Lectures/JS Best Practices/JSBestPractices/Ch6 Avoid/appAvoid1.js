//
// 'use strict';

const selection = 'bright';

const palettes = {
  bright: ['yellowgreen', 'fuchsia'],
  neutral: ['burlywood', 'slategray'],
  chill: ['slateblue', 'palevioletred'],
};

// To fix ... don't do these
//const selectedColors = eval('palettes.' + selection);
//console.log('Color 1:', selectedColors[0]);
//console.log('Color 2:', selectedColors[1]);
// Instead
console.log('Color 1:', palettes[selection][0] );
console.log('Color 2:', selectedColors[selection][1]);

//setTimeout(
  //"document.querySelector('body').classList.add(selection);",
  // // 2000
//);
// here pass an anonimous function that will not require eval ... more secure
setTimeout(()  => {
   document.querySelector('body').classList.add(selection);
}, 2000 );
