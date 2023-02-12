const images=["img1.png", "img2.png", "img3.jpeg"];

const chosenImage=images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src=`img/${chosenImage}`;

document.body.appendChild(bgImage);