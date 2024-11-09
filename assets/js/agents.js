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

const img_main = document.querySelector(".agents-content");

// Cria e exibe a primeira imagem
function exibirImagem() {
  const imgSelecionada = document.createElement("img");
  imgSelecionada.src = imagens[Math.floor(Math.random() * imagens.length)];
  imgSelecionada.className = "agents_main";
  img_main.appendChild(imgSelecionada);
}

function exibirCards() {
  const cardAgents = document.querySelector(".content");

  imagens.forEach((agent) => {
    const cardHTML = `
      <div class="card ">
        <div class="content-card">
          <img src="${agent}" class="icon-agents">
          <ion-icon name="lock-closed" class="icon-close"></ion-icon>
        </div>
      </div>
    `;
    cardAgents.insertAdjacentHTML("beforeend", cardHTML);
  });
}

function personagens() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.addEventListener("click", function () {
      // Remove a imagem anterior
      const imagemAnterior = img_main.querySelector("img");
      if (imagemAnterior) {
        imagemAnterior.remove();
      }

      // Cria e exibe a nova imagem selecionada
      const imgSelecionada = document.createElement("img");
      imgSelecionada.src = imagens[index];
      imgSelecionada.className = "agents_main";
      imgSelecionada.style.margin = "1rem";
      img_main.appendChild(imgSelecionada);
    });
  });
}

// Chama as funções em ordem
exibirCards();
personagens();
exibirImagem();
