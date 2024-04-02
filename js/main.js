const displayedImage = document.querySelector('.gallery-item');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgSrcAltText = [
    {
      url:
        "C:\Users\jaymi\OneDrive\Documents\imageGallery\img\space1.jpg",
      alt: "Closeup of a human eye"
    },
    {
      url:
        "C:\Users\jaymi\OneDrive\Documents\imageGallery\img\space2.jpg",
      alt: "An obscure marble stone"
    },
    {
      url:
        "C:\Users\jaymi\OneDrive\Documents\imageGallery\img\space3.jpg",
      alt: "Bunch of brunfelsia pauciflora"
    },
    {
      url:
        "C:\Users\jaymi\OneDrive\Documents\imageGallery\img\space4.jpg",
      alt: "An egyptian ancient wall-painting demonstrating human behavior"
    },
    {
      url:
        "C:\Users\jaymi\OneDrive\Documents\imageGallery\img\space5.jpg",
      alt: "A butterfly sitting over a large leaf"
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