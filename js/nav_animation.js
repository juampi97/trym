let barra_nav = document.querySelector("#barra");
let texto_links = document.querySelectorAll("#texto_links");
console.log(texto_links);

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 10) {
    barra_nav.classList.add("bg-blanco");
    texto_links.forEach((elemento) => {
      elemento.classList.add("text-negro");
    });
  } else {
    barra_nav.classList.remove("bg-blanco");
    texto_links.forEach((elemento) => {
        elemento.classList.remove("text-negro");
      });
  }
});
