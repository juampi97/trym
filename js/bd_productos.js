// Clase productos

class Productos {
  constructor(id, nombre, descripcion, items_tabla, fotos) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.items_tabla = items_tabla;
    this.fotos = fotos;
  }
}

// Load json products

let productos = [];

const loadProducts = async () => {
  let arrayLoadProductos = [];
  const response = await fetch("./productos.json");
  const data = await response.json();
  data.forEach((element) => {
    let newProduct = new Productos(
      element.id,
      element.nombre,
      element.descripcion,
      element.items_tabla,
      element.fotos
    );
    arrayLoadProductos.push(newProduct);
  });
  localStorage.setItem("productos", JSON.stringify(arrayLoadProductos));
};

loadProducts();
productos = JSON.parse(localStorage.getItem("productos"));

// Generar menu items productos

const menuDropdownProductos = document.querySelector("#menuDropdownProductos");

function generateMenuItems(array) {
  menuDropdownProductos.innerHTML = "";

  for (const element of array) {
    const menuItem = document.createElement("li");
    menuItem.innerHTML = `<a class="dropdown-item text-blanco fw-normal bg-none VerMas" href="#" id="VerMas-${element.id}">${element.nombre}</a>`;
    menuDropdownProductos.appendChild(menuItem);
  }

  const menuItem = document.createElement("li");
  menuItem.innerHTML = `<a class="dropdown-item text-blanco fw-normal bg-none d-lg-none" href="./productos.html">Ver todos</a>`;
  menuDropdownProductos.appendChild(menuItem);
}

generateMenuItems(productos);

// IDs cards

const VerMas = document.querySelectorAll(".VerMas");
for (const element of VerMas) {
  element.addEventListener("click", () => {
    const id = element.id.split("-")[1];
    window.location.href = `./producto.html`;
    localStorage.setItem("id", id);    
  });
}

