const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgSrcAltText = [
    {
      url:
        "https://github.com/Jaymiller2002/imageGallery/blob/main/img/space1.jpg?raw=true",
      alt: "Magical Space Area 1"
    },
    {
      url:
        "https://github.com/Jaymiller2002/imageGallery/blob/main/img/space2.jpg?raw=true",
      alt: "Magical Space Area 2"
    },
    {
      url:
        "https://github.com/Jaymiller2002/imageGallery/blob/main/img/space3.jpg?raw=true",
      alt: "Magical Space Area 3"
    },
    {
      url:
        "https://github.com/Jaymiller2002/imageGallery/blob/main/img/space4.jpg?raw=true",
      alt: "Magical Space Area 4"
    },
    {
      url:
        "https://github.com/Jaymiller2002/imageGallery/blob/main/img/space5.jpg?raw=true",
      alt: "Magical Space Area 5"
    }
  ];
  
  /* Looping through images */
  
  for (let imgItem of imgSrcAltText) {
    const newImage = document.createElement("img");
  
    newImage.setAttribute("src", imgItem.url);
    newImage.setAttribute("alt", imgItem.alt);
  
    thumbBar.appendChild(newImage);
  
    newImage.addEventListener("click", (e) => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
  }

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", (e) => {
    if (e.target.getAttribute("class") === "dark") {
      e.target.setAttribute("class", "light");
      e.target.textContent = "Lighten";
      overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
      e.target.setAttribute("class", "dark");
      e.target.textContent = "Darken";
      overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
  });