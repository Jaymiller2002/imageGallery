const displayedImage = document.querySelector('.gallery-item');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const src = ["space1.jpg","space2.jpg","space3.jpg","space4.jpg","space5.jpg"];
/* Declaring the alternative text for each image file */
const alt = ["SPACE"];
/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */