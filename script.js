
const images = [
    {
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
        category: "nature",
        title: "Beautiful Mountains"
    },
    {
        src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
        category: "nature",
        title: "Mountain Lake"
    },
    {
        src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800",
        category: "city",
        title: "City Lights"
    },
    {
        src: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800",
        category: "city",
        title: "Modern Architecture"
    },
    {
        src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800",
        category: "animals",
        title: "Wild Deer"
    },
    {
        src: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800",
        category: "animals",
        title: "Cute Dog"
    },
    {
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
        category: "nature",
        title: "Green Forest"
    },
    {
        src: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=800",
        category: "nature",
        title: "Night Sky"
    },
    {
        src: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800",
        category: "city",
        title: "City Skyline"
    },
    {
        src: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=800",
        category: "animals",
        title: "Cute Puppy"
    },
    {
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
        category: "nature",
        title: "Scenic Landscape"
    },
    {
        src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800",
        category: "city",
        title: "Urban View"
    }
];

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let filteredImages = images;
let currentIndex = 0;

function displayImages(category = "all") {

    filteredImages = category === "all"
        ? images
        : images.filter(img => img.category === category);

    gallery.innerHTML = "";

    filteredImages.forEach((img, index) => {

        const item = document.createElement("div");
        item.className = "gallery-item";

        const image = document.createElement("img");
        image.src = img.src;
        image.alt = img.title;
        image.loading = "lazy";

        item.appendChild(image);

        item.addEventListener("click", () => {
            openLightbox(index);
        });

        gallery.appendChild(item);
    });
}

function filterImages(category) {

    displayImages(category);

    document.querySelectorAll(".filters button").forEach(button => {
        button.classList.remove("active");
    });

    const buttons = document.querySelectorAll(".filters button");

    buttons.forEach(button => {
        if (button.textContent.toLowerCase() === category) {
            button.classList.add("active");
        }
    });
}

function openLightbox(index) {

    currentIndex = index;

    lightboxImg.src = filteredImages[currentIndex].src;

    lightbox.style.display = "flex";
}

function closeLightbox() {
    lightbox.style.display = "none";
}

function changeImage(direction) {

    currentIndex += direction;

    if (currentIndex >= filteredImages.length) {
        currentIndex = 0;
    }

    if (currentIndex < 0) {
        currentIndex = filteredImages.length - 1;
    }

    lightboxImg.src = filteredImages[currentIndex].src;
}

// Keyboard navigation
document.addEventListener("keydown", function(event) {

    if (lightbox.style.display === "flex") {

        if (event.key === "ArrowRight") {
            changeImage(1);
        }

        if (event.key === "ArrowLeft") {
            changeImage(-1);
        }

        if (event.key === "Escape") {
            closeLightbox();
        }
    }
});

// Display all images initially
displayImages();

document.querySelector('.filters button').classList.add('active');
