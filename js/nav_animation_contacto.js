let barra_nav = document.querySelector("#barra");
let logo_nav_pc = document.querySelector("#logo_nav_pc");
let logo_nav_phone = document.querySelector("#logo_nav_phone");

// Cambio de color de la barra de navegación al hacer scroll

function ToggleLogoMediaQuery() {
  if (innerWidth < 992) {
    barra_nav.classList.remove("bg-white");
    barra_nav.classList.add("bg-sm-transparente","navbar-dark");
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
