let barra_nav = document.querySelector("#barra");
let texto_links = document.querySelectorAll("#texto_links");
let logo_nav_pc = document.querySelector("#logo_nav_pc");
let logo_nav_phone = document.querySelector("#logo_nav_phone");

// Cambio de color de la barra de navegación al hacer scroll

window.addEventListener("scroll", function () {
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
});

function ToggleLogoMediaQuery() {
  if (innerWidth < 992) {
    logo_nav_phone.className = "";
    logo_nav_pc.className = "d-none";
  } else {
    logo_nav_phone.className = "d-none";
    logo_nav_pc.className = "";
  }
}

ToggleLogoMediaQuery();
