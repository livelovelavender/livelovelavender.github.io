console.log("Hello World");

// DOM Elements
const button = document.getElementById("MyBlog");
const targetSection = document.getElementById('myblog');
const GoodReadsButton = document.getElementById("BF");
const LinkedInButton = document.getElementById("MyLinkedIn");
const ProjectsButton = document.getElementById("Projects");

// External Links
const externalLinks = {
	goodreads: "https://www.goodreads.com/user/show/175883859-kayla-snyder",
	linkedin: "https://www.linkedin.com/in/kayla-snyder-b15069292",
	projects: "NewPage.html"
};

// Button Event Listeners
button.addEventListener("click", () => {
	targetSection.scrollIntoView({ behavior: 'smooth' });
});

GoodReadsButton.addEventListener("click", () => {
	window.open(externalLinks.goodreads, '_blank');
});

LinkedInButton.addEventListener("click", () => {
	window.open(externalLinks.linkedin, '_blank');
});

ProjectsButton.addEventListener("click", () => {
	window.open(externalLinks.projects, '_blank');
});

// Profile Image Slider
const imageSlider = document.getElementById('ImageContainer');
const images = imageSlider.querySelectorAll('img');
let currentIndex = 0;

function cycleImages() {
	images[currentIndex].style.opacity = '0';
	currentIndex = (currentIndex + 1) % images.length;
	images[currentIndex].style.opacity = '1';
}

setInterval(cycleImages, 5000);

// Blog Image Gallery
document.querySelectorAll('.image-container').forEach(container => {
	const images = container.querySelectorAll('.VerticalBlogImage, .HorizontalBlogImage');
	const prevBtn = container.querySelector('.prev');
	const nextBtn = container.querySelector('.next');
	let currentIndex = 0;

	// Initialize first image
	images[0].classList.add('active');

	function showImage(index) {
		images.forEach(img => img.classList.remove('active'));
		images[index].classList.add('active');
	}

	function nextImage() {
		currentIndex = (currentIndex + 1) % images.length;
		showImage(currentIndex);
	}

	function prevImage() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
		showImage(currentIndex);
	}

	// Event Listeners
	nextBtn.addEventListener('click', nextImage);
	prevBtn.addEventListener('click', prevImage);

	// Touch Swipe Support
	let touchStartX = 0;
	let touchEndX = 0;

	container.addEventListener('touchstart', e => {
		touchStartX = e.changedTouches[0].screenX;
	});

	container.addEventListener('touchend', e => {
		touchEndX = e.changedTouches[0].screenX;
		handleSwipe();
	});

	function handleSwipe() {
		const swipeThreshold = 50;
		const diff = touchStartX - touchEndX;

		if (Math.abs(diff) > swipeThreshold) {
			if (diff > 0) {
				nextImage();
			} else {
				prevImage();
			}
		}
	}

	// Keyboard Navigation
	document.addEventListener('keydown', (e) => {
		if (e.key === 'ArrowRight') {
			nextImage();
		} else if (e.key === 'ArrowLeft') {
			prevImage();
		}
	});
});
