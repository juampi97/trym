// Generar cards productos - Page productos

const cardsProductsContainer = document.querySelector('#cardsProductsContainer')

function generateCards (array){
    cardsProductsContainer.innerHTML = ''
    
    for (const element of array){
        const card = document.createElement('div')
        card.classList.add('card', 'card-producto', 'col-10', 'col-md-5', 'col-lg-3', 'my-2', 'mx-2')
        card.innerHTML = `
        <div class="card-body">
        <div class="d-flex justify-content-around">
        <img class="main-productos_card_img" src="${element.fotos[0]}" class="card-img-top" alt="${element.nombre}">
        </div>
        <h5 class="card-title pt-3">${element.nombre}</h5>
        <p class="card-text">${element.descripcion}</p>
        <div class="d-flex justify-content-around">
        <a href="#" class="btn btn-rojo">Ver más</a>
        </div>
        </div>
        `
        cardsProductsContainer.appendChild(card)
    }
}

generateCards(productos)