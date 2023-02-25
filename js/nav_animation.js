let barra_nav = document.querySelector("#barra");
let texto_links = document.querySelectorAll("#texto_links");
let logo_nav_pc = document.querySelector("#logo_nav_pc");
let logo_nav_phone = document.querySelector("#logo_nav_phone");

// Cambio la barra de navegación al hacer scroll

window.addEventListener("scroll", function () {
  if (this.innerWidth > 992) {
    logo_nav_phone.className = "d-none";
    logo_nav_pc.className = "";
    if (window.pageYOffset > 10) {
      barra_nav.classList.add("bg-blanco");
      texto_links.forEach((elemento) => {
        elemento.classList.add("texto-azul");
      });
      logo_nav_pc.src = "./img/logo.png";
    } else {
      barra_nav.classList.remove("bg-blanco");
      texto_links.forEach((elemento) => {
        elemento.classList.remove("texto-azul");
      });
      logo_nav_pc.src = "./img/logo.svg";
    }
  } else {
    texto_links.forEach((elemento) => {
      elemento.classList.add("text-blanco");
    });
    logo_nav_phone.className = "";
    logo_nav_pc.className = "d-none";
  }
});

// Cambio la barra de navegación al cambiar el tamaño de la pantalla

function ToggleLogoMediaQuery() {
  if (innerWidth < 992) {
    texto_links.forEach((elemento) => {
      elemento.classList.add("text-blanco");
    });
    logo_nav_phone.className = "";
    logo_nav_pc.className = "d-none";
  } else {
    logo_nav_phone.className = "d-none";
    logo_nav_pc.className = "";
  }
}

ToggleLogoMediaQuery();

// Evento click buttonProductos

const buttonProductos = document.querySelector(".buttonProductos")

buttonProductos.addEventListener("click", function () {
  if (innerWidth > 992) {
    window.location = "./productos.html";
  }
});
