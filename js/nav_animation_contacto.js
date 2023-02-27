let barra_nav = document.querySelector("#barra");
let texto_links = document.querySelectorAll("#texto_links");
let logo_nav_pc = document.querySelector("#logo_nav_pc");
let logo_nav_phone = document.querySelector("#logo_nav_phone");

// Cambio de color de la barra de navegación al hacer scroll

function ToggleLogoMediaQuery() {
  if (innerWidth < 992) {
    barra_nav.classList.remove("bg-white");
    barra_nav.classList.add("bg-sm-transparente","navbar-dark");
    texto_links.forEach((elemento) => {
      elemento.classList.add("text-blanco");
    });
    logo_nav_phone.className = "";
    logo_nav_pc.className = "d-none";
  } else {
    barra_nav.classList.add("bg-white");
    barra_nav.classList.remove("bg-sm-transparente","navbar-dark");
    logo_nav_phone.className = "d-none";
    logo_nav_pc.className = "";
  }
}

ToggleLogoMediaQuery();

// Evento click buttonProductos

const buttonProductos = document.getElementById("menuDropdownProductos");

buttonProductos.addEventListener("click", function () {
  if (innerWidth > 992) {
    window.location = "./productos.html";
  }
});
