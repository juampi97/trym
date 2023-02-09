let barra_nav = document.querySelector("#barra");
let texto_links = document.querySelectorAll("#texto_links");
let logo_nav_pc = document.querySelector("#logo_nav_pc");
let logo_nav_phone = document.querySelector("#logo_nav_phone");

// Cambio de color de la barra de navegación al hacer scroll

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
