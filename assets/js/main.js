
$(document).ready(function () {
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        vertical: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});


const imagens = [
  "../img/ammo1.webp",
  "../img/ammo2.webp",
  "../img/ammo3.webp",
  "../img/ammo4.webp",
  "../img/ammo5.webp",
  "../img/ammo6.webp",
  "../img/ammo7.webp"
];


const imgprinc = document.querySelector(".ammo_display");
const img_main = document.querySelector(".arms_content");
const cards = document.querySelectorAll(".card, .card1, .card2, .card3, .card4, .card5, .card6");


cards.forEach((card, index) => {
  card.addEventListener("click", function () {
    imgprinc.style.display = "none";
    const imgSelecionada = document.createElement("img");
    imgSelecionada.src = imagens[index];
    imgSelecionada.style.margin = "10rem";
    img_main.appendChild(imgSelecionada);
  });
});
