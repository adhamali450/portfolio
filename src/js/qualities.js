// qualities animated blow "I can make you something"

import Typed from 'typed.js';
const qualities = ["Cutting Edge", "Upscale" , "Artistic", "Extraordinary"];
var options = {
  strings: qualities,
  typeSpeed: 150,
  backSpeed: 50,
  shuffle: false,
  backDelay: 1000,
  fadeOut: false,

  //cursor
  showCursor: true,
  cursorChar: '_',
};

export const loadQualities = (elementSelector) => new Typed(elementSelector, options);