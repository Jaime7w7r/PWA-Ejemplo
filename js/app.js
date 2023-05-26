const container = document.querySelector(".container");
const coffees = [
    { name: "Perspiciatis", image: "images/coffee.jpg" },
    { name: "Voluptatem", image: "images/coffee.jpg" },
    { name: "Explicabo", image: "images/coffee.jpg" },
    { name: "Rchitecto", image: "images/coffee.jpg" },
    { name: " Beatae", image: "images/coffee.jpg" },
    { name: " Vitae", image: "images/coffee.jpg" },
    { name: "Inventore", image: "images/coffee.jpg" },
    { name: "Veritatis", image: "images/coffee.jpg" },
    { name: "Accusantium", image: "images/coffee.jpg" },
];

const showCoffees = () => {
    let output = "";
    coffees.forEach(({ name, image }) => {
        output += `
      <div class="card">
        <img class="card--avatar" src=${image} />
        <h1 class="card--title">${name}</h1>
        <a class="card--link" href="#">Taste</a>
      </div>
    `;
    });
    container.innerHTML = output;
};

let deferredPrompt;

window.addEventListener('beforeinstallprompt', function (event) {
    event.preventDefault();
    deferredPrompt = event;
});

window.addEventListener('load', function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/serviceWorker.js').then(function (registration) {
            console.log('Service Worker registered successfully:', registration);

            if (deferredPrompt) {
                alert('¡Instala nuestra aplicación!');
            }
        }).catch(function (error) {
            console.log('Error registering Service Worker:', error);
        });
    }
});

document.addEventListener('DOMContentLoaded', showCoffees);
