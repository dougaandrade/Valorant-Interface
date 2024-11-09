const imagensGuns = [
  { tier: "TIER 1", guns: "../img/ammo1.webp" },
  { tier: "TIER 2", guns: "../img/ammo2.webp" },
  { tier: "TIER 3", guns: "../img/ammo3.webp" },
  { tier: "TIER 4", guns: "../img/ammo4.webp" },
  { tier: "TIER 5", guns: "../img/ammo5.webp" },
  { tier: "TIER 6", guns: "../img/ammo6.webp" },
  { tier: "TIER 7", guns: "../img/ammo7.webp" },
];

let imagemAtual = imagensGuns;

function exibirImagem() {
  const img_main = document.querySelector(".arms_content");
  img_main.style.margin = "1rem";
  img_main.innerHTML = `
   <img src="${imagemAtual[0].guns}" class="armas_main">
  </div>`;
}

function exibirCards() {
  const cardGuns = document.querySelector(".episode");
  imagensGuns.forEach((guns) => {
    const cardHTML = `
    <div class="card">
        <div class="ep-basic">
        <img src="${guns.guns}" class="icon-guns">
        <div class="card-span">
        <span class="span">${guns.tier}</span>
        <span class="span"><ion-icon name="lock-closed" class="icon-close"></ion-icon></span>
        </div>
        </div>
      </div>  
    `;
    cardGuns.insertAdjacentHTML("beforeend", cardHTML);
  });
}

function exibirClickGuns() {
  const img_main = document.querySelector(".arms_content");
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.addEventListener("click", function () {
      if (img_main.querySelector("img")) {
        img_main.querySelector("img").remove();
      }

      // Cria e exibe a nova imagem selecionada
      const imgSelecionada = document.createElement("img");
      imgSelecionada.src = imagensGuns[index].guns;
      imgSelecionada.className = "armas_main";
      img_main.appendChild(imgSelecionada);

      imagemAtual = index;
    });
  });
}

exibirCards();
exibirClickGuns();
exibirImagem();
