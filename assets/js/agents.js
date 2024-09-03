const imagens = [
  "../img/Jett_Artwork_Full.webp",
  "../img/Astra_Artwork_Full.webp",
  "../img/Breach_Artwork_Full.webp",
  "../img/Brimstone_Artwork_Full.webp",
  "../img/Chamber_Artwork_Full.webp",
  "../img/Cypher_Artwork_Full.webp",
  "../img/Deadlock_Artwork_Full.webp",
  "../img/Fade_Artwork_Full.webp",
  "../img/Gekko_Artwork_Full.webp",
  "../img/Yoru_Artwork_Full.webp",
  "../img/Viper_Artwork_Full.webp",
  "../img/Harbor_Artwork_Full.webp",
  "../img/KAYO_Artwork_Full.webp",
  "../img/Killjoy_Artwork_Full.webp",
  "../img/Neon_Artwork_Full.webp",
  "../img/Omen_Artwork_Full.webp",
  "../img/Phoenix_Artwork_Full.webp",
  "../img/Raze_Artwork_Full.webp",
  "../img/Reyna_Artwork_Full.webp",
  "../img/Sage_Artwork_Full.webp",
  "../img/Sova_Artwork_Full.webp",
  "../img/Skye_Artwork_Full.webp",
];
const imgprinc = document.querySelector(".ammo_display");
const img_main = document.querySelector(".agents-content");
const cards = document.querySelectorAll(".card");
let imagemAtual = 0; // Armazena o índice da imagem atual

cards.forEach((card, index) => {
  card.addEventListener("click", function () {
    // Remove a imagem anterior
    if (img_main.querySelector("img")) {
      img_main.querySelector("img").remove();
    }

    // Cria e exibe a nova imagem selecionada
    const imgSelecionada = document.createElement("img");
    imgSelecionada.src = imagens[index];
    imgSelecionada.className = "agents_main";
    imgSelecionada.style.margin = "1rem";
    img_main.appendChild(imgSelecionada);

    imagemAtual = index; // Atualiza o índice da imagem atual
  });
});
