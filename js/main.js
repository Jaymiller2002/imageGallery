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
  
// Create image elements and append them to a container
const container = document.getElementById("imageContainer");

imgSrcAltText.forEach(data => {
  const img = document.createElement("img");
  img.src = data.url;
  img.alt = data.alt;
  img.width = "200"; // Set the width attribute
  img.height = "150"; // Set the height attribute
  container.appendChild(img);
});
In this modified code:

I added width and height attributes to the created <img> elements and set them to 200 and 150, respectively. You can adjust these values according to your requirements.
I assumed you have a container element with the ID "imageContainer" where you want to append these images. Adjust the getElementById call to match the ID of your actual container element.



User
with this code:   const imgSrcAltText = [
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
Where would you put: // Create image elements and append them to a container
const container = document.getElementById("imageContainer");

imgSrcAltText.forEach(data => {
  const img = document.createElement("img");
  img.src = data.url;
  img.alt = data.alt;
  img.width = "200"; // Set the width attribute
  img.height = "150"; // Set the height attribute
  container.appendChild(img);
});
ChatGPT
You would integrate the code for creating image elements and appending them to a container within your existing loop. Here's how you can do it:

javascript
Copy code
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