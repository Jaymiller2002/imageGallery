const displayedImage = document.querySelector('.gallery-item');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgSrcAltText = [
    {
      url:
        "C:\Users\jaymi\Downloads\space1.jpg",
      alt: "Magical Space Area 1"
    },
    {
      url:
        "C:\Users\jaymi\OneDrive\Documents\imageGallery\img\space2.jpg",
      alt: "Magical Space Area 2"
    },
    {
      url:
        "C:\Users\jaymi\OneDrive\Documents\imageGallery\img\space3.jpg",
      alt: "Magical Space Area 3"
    },
    {
      url:
        "C:\Users\jaymi\OneDrive\Documents\imageGallery\img\space4.jpg",
      alt: "Magical Space Area 4"
    },
    {
      url:
        "C:\Users\jaymi\OneDrive\Documents\imageGallery\img\space5.jpg",
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