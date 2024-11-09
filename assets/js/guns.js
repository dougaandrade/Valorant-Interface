const imagensGuns = [
  "../img/ammo1.webp",
  "../img/ammo2.webp",
  "../img/ammo3.webp",
  "../img/ammo4.webp",
  "../img/ammo5.webp",
  "../img/ammo6.webp",
  "../img/ammo7.webp",
];

let imagemAtual = imagensGuns;

function exibirImagem() {
  const img_main = document.querySelector(".arms_content");
  img_main.innerHTML = `<div class="showroomarms">
   <img src="${imagemAtual[0]}">
  </div>`;
}

function exibirCards() {
  const cardGuns = document.querySelector(".episode");
  cardGuns.style.margin = "1rem";

  imagensGuns.forEach((guns) => {
    const cardHTML = `
    <div class="card">
        <div class="ep-basic">
          <span class="span">TIER 2</span>
          <span class="span"><ion-icon name="lock-closed" class="icon-close"></ion-icon></span>
          <img src="${guns}" class="icon-guns">
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
      imgSelecionada.src = imagensGuns[index];
      imgSelecionada.className = "armas_main";
      imgSelecionada.style.margin = "1rem";
      img_main.appendChild(imgSelecionada);

      imagemAtual = index;
    });
  });
}

exibirCards();
exibirClickGuns();
exibirImagem();
