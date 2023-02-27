// Ver que item se busca presentar
let id = localStorage.getItem("id");

// Funcion para generar contenido
const productoTitle = document.querySelector("#productoTitle");
const sliderMini = document.querySelector("#sliderMini");
const sliderMain = document.querySelector("#sliderMain");

function generateContent(id){
    let producto = productos.find((element) => element.id == id);
    productoTitle.innerHTML = producto.nombre;
    
}

generateContent(id);