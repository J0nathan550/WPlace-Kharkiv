const images =
[
    {
        src: 'gallery/dima.jpg',
        alt: 'Dmitrii Gnidko',
        name: 'Dmitrii Savko by J0nathan550 (clickable)',
        link: 'https://wplace.live/?lat=49.98451791149782&lng=36.314032871777314&zoom=14.934702980710728'
    },
    {
        src: 'gallery/ghostfaceandmyers.png',
        alt: 'ghostfaceandmyers',
        name: 'Ghost Myers by Ni-Wi-Duh (clickable)',
        link: 'https://wplace.live/?lat=50.01378283990406&lng=36.18747037177731&zoom=14.315239980573214'
    },
    {
        src: 'gallery/viktor.png',
        alt: 'Viktor',
        name: 'Viktor by J0nathan550 (clickable)',
        link: 'https://wplace.live/?lat=49.99875712874008&lng=36.305068028027335&zoom=14.49638230586542'
    },
    {
        src: 'gallery/soprano.jpg',
        alt: 'Soprano',
        name: 'Soprano by mozzie (clickable)',
        link: 'https://wplace.live/?lat=40.10785739251732&lng=44.86473599677733&zoom=9.977591380760746'
    },
    {
        src: 'gallery/ihaveadream.jpg',
        alt: 'I Have a Dream',
        name: 'I HAVE A DREAM by mozzie (clickable)',
        link: 'https://wplace.live/?lat=49.80957505893126&lng=36.14633755927734&zoom=14.95957567983924'
    },
    {
        src: 'gallery/nakazato.png',
        alt: 'Nakazato',
        name: 'Nakazato by openshooter (clickable)',
        link: 'https://wplace.live/?lat=49.93883357443886&lng=36.38135709052733&zoom=16.5790624866433'
    },
    {
        src: 'gallery/coolVibrations.png',
        alt: 'Cool Vibrations',
        name: '[COOL VIBRANTIONS] by openshooter (clickable)',
        link: 'https://wplace.live/?lat=49.95297321138959&lng=36.41897427802731&zoom=14.540471258367386'
    },
    {
        src: 'gallery/spiffo.jpg',
        alt: 'Spiffo',
        name: 'Spiffo (clickable)',
        link: 'https://wplace.live/?lat=49.90963623850678&lng=36.17077115302732&zoom=15.883436969491987'
    },
    {
        src: 'gallery/solivan.png',
        alt: 'Solivan Brugmansia',
        name: 'Solivan Brugmansia by malenkiy_gay (clickable)',
        link: 'https://wplace.live/?lat=49.978188017159034&lng=36.32721646552732&zoom=15.677949673186601'
    },
    {
        src: 'gallery/power.jpg',
        alt: 'Power',
        name: 'Power by malenkiy_gay (clickable)',
        link: 'https://wplace.live/?lat=50.11883132966001&lng=36.267275059277324&zoom=15.26271503418293'
    },
    {
        src: 'gallery/arter.jpg',
        alt: 'Arter',
        name: 'Arter by Arter (clickable)',
        link: 'https://wplace.live/?lat=50.131791281407956&lng=36.25584927802733&zoom=14.5'
    }
];

let currentImageIndex = 0;
const image = document.getElementById("galleryImage");
const imageInfo = document.getElementById("imageInfo");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let rotation = 0;
let mouseX = 0, mouseY = 0;

function updateImage() {
    const currentImage = images[currentImageIndex];
    image.src = currentImage.src;
    image.alt = currentImage.alt;
    imageInfo.textContent = `${currentImage.name} (${currentImageIndex + 1} of ${images.length})`;
    imageInfo.href = currentImage.link;
}

function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
}

prevBtn.addEventListener("click", showPreviousImage);
nextBtn.addEventListener("click", showNextImage);

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        showPreviousImage();
    } else if (event.key === "ArrowRight") {
        showNextImage();
    }
});

document.addEventListener("mousemove", (event) => {
    const { innerWidth, innerHeight } = window;
    mouseX = (innerWidth / 2 - event.clientX) / 20;
    mouseY = (innerHeight / 2 - event.clientY) / 20;

    if (!image.style.transition || image.style.transition === "transform 0.1s ease-out") {
        image.style.transform = `rotateY(${rotation - mouseX}deg) rotateX(${mouseY}deg)`;
    }
});

image.addEventListener("click", () => {
    rotation += 360;
    image.style.transition = "transform 0.3s ease-out";
    image.style.transform = `rotateY(${rotation - mouseX}deg) rotateX(${mouseY}deg) scale(1.1)`;

    setTimeout(() => {
        image.style.transform = `rotateY(${rotation - mouseX}deg) rotateX(${mouseY}deg) scale(1)`;
        image.style.transition = "transform 0.1s ease-out";
    }, 300);
});

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', function () {
    navMenu.classList.toggle('active');
});

document.addEventListener('click', function (event) {
    const navMenu = document.getElementById('navMenu');
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    if (!navbar.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});

window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        document.getElementById('navMenu').classList.remove('active');
    }
});

updateImage();