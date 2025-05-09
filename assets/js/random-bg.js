document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const images = [
    "../img/tubularbells.jpg",
    "../img/touring.jpg",
  ];

  const randomImage = images[Math.floor(Math.random() * images.length)];
  header.style.backgroundImage = `url('${randomImage}')`;
});