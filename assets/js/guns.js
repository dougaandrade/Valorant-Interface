const imagensGuns = [
  "../img/ammo1.webp",
  "../img/ammo2.webp",
  "../img/ammo3.webp",
  "../img/ammo4.webp",
  "../img/ammo5.webp",
  "../img/ammo6.webp",
  "../img/ammo7.webp",
];

const imgprinc = document.querySelector(".ammo_display");
const img_main = document.querySelector(".arms_content");
const cards = document.querySelectorAll(".card");
let imagemAtual = 0;

cards.forEach((card, index) => {
  card.addEventListener("click", function () {
    if (img_main.querySelector("img")) {
      img_main.querySelector("img").remove();
    }

    // Cria e exibe a nova imagem selecionada
    const imgSelecionada = document.createElement("img");
    imgSelecionada.src = imagensGuns[index];
    imgSelecionada.className = "armas_main";
    imgSelecionada.style.margin = "2rem";
    img_main.appendChild(imgSelecionada);

    imagemAtual = index;
  });
});
