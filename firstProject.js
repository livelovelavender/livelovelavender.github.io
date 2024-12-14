console.log("Hello World");

const button = document.getElementById("MyBlog");
const targetSection = document.getElementById('myblog');
const GoodReadsButton = document.getElementById("BF");
const LinkedInButton = document.getElementById("MyLinkedIn");

// Add an event listener to the buttons
button.addEventListener("click", function() {
	targetSection.scrollIntoView({ behavior: 'smooth' });});

GoodReadsButton.addEventListener("click", function(){
	window.open("https://www.goodreads.com/user/show/175883859-kayla-snyder", '_blank');
})
LinkedInButton.addEventListener("click", function(){
	window.open("https://www.linkedin.com/in/kayla-snyder-b15069292", '_blank');
})




const imageSlider = document.getElementById('ImageContainer');
const images = imageSlider.querySelectorAll('img');
let currentIndex = 0;

function cycleImages() {
	images[currentIndex].style.opacity = '0'; // Fade out the current image
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.opacity = '1'; // Fade in the next image
}

setInterval(cycleImages, 5000); // Change images every 5 seconds
