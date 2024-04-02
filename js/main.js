const displayedImage = document.querySelector('.gallery-item');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = [
    'C:\Users\jaymi\OneDrive\Documents\imageGallery\img\space1.jpg',
    'C:\Users\jaymi\OneDrive\Documents\imageGallery\img\space2.jpg',
    'C:\Users\jaymi\OneDrive\Documents\imageGallery\img\space3.jpg',
    'C:\Users\jaymi\OneDrive\Documents\imageGallery\img\space4.jpg',
    'C:\Users\jaymi\OneDrive\Documents\imageGallery\img\space5.jpg'
            ];
         
            const container = document.getElementById('displayed-img');
         
            for (let i = 0; i < images.length; i++) {
                const img = document.createElement('img');
                img.src = images[i];
                container.appendChild(img);
            }
/* Declaring the alternative text for each image file */
const alt = ["space 1", "space 2", "space 3", "space 4", "space 5"];
/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */