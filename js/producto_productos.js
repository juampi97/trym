// Ver que item se busca presentar
let id = localStorage.getItem("id");

// Funcion para generar contenido
const productoTitle = document.querySelector("#productoTitle");
const sliderMini = document.querySelector("#sliderMini");
const sliderMain = document.querySelector("#sliderMain");

function generateContent(id) {
  let producto = productos.find((element) => element.id == id);
  productoTitle.innerHTML = producto.nombre;
  sliderMain.innerHTML = `
  <div class="carousel-item active">
    <img
      src="./img/productos/${producto.id}/1.jpg"
      class="d-block w-100"
      alt="${producto.nombre}}"
    />
  </div>
`;
    for (let i = 2; i <= producto.fotos.length; i++) {
        sliderMain.innerHTML += `
        <div class="carousel-item">
        <img
            src="./img/productos/${producto.id}/${i}.jpg"
            class="d-block w-100"
            alt="${producto.nombre}"
        />
        </div>`
    };

    sliderMini.innerHTML = `
    <li
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide-to="0"
    class="active carousel-indicators_li"
    aria-current="true"
    aria-label="Slide 1"
    style="
      background-image: url(./img/productos/${producto.id}/1.jpg);
    "
  ></li>`

  for (let i = 2; i <= producto.fotos.length; i++) {
    sliderMini.innerHTML += `
    <li
    class="carousel-indicators_li"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide-to="${i-1}"
    aria-label="Slide ${i}"
    style="
      background-image: url(./img/productos/${producto.id}/${i}.jpg);
    "
  ></li>`
};

}

generateContent(id);
