// Generar cards productos - Page productos

const cardsProductsContainer = document.querySelector(
  "#cardsProductsContainer"
);

function generateCards(array) {
  cardsProductsContainer.innerHTML = "";

  for (const element of array) {
    const card = document.createElement("div");
    card.classList.add(
      "card",
      "card-producto",
      "col-10",
      "col-md-5",
      "col-lg-5",
      "col-xl-3",
      "my-2",
      "mx-2"
    );
    card.innerHTML = `
        <div class="card-body">
        <div class="d-flex justify-content-around">
        <img class="main-productos_card_img card-img-top w-75 h-auto" src="${element.fotos[0]}" alt="${element.nombre}">
        </div>
        <h5 class="card-title pt-3">${element.nombre}</h5>
        <p class="card-text product_descripction">${element.descripcion}</p>
        <div class="d-flex justify-content-around">
        <a  class="btn btn-rojo verMas mt-3" id="verMas-${element.id}">Ver más</a>
        </div>
        </div>
        `;
    cardsProductsContainer.appendChild(card);
  }
}

generateCards(productos);

// IDs cards

const verMas = document.querySelectorAll(".verMas");

for (const element of verMas) {
  element.addEventListener("click", () => {
    const id = element.id.split("-")[1];
    console.log(id);
    window.location.href = `./producto.html`;
    localStorage.setItem("id", id);    
  });
}
