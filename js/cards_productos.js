// Generar cards productos - Page productos

const cardsProductsContainer = document.querySelector('#cardsProductsContainer')

function generateCards (array){
    cardsProductsContainer.innerHTML = ''
    
    for (const element of array){
        const card = document.createElement('div')
        card.classList.add('card', 'card-producto', 'col-12', 'col-md-6', 'col-lg-4', 'col-xl-3', 'my-2', 'mx-2')
        card.innerHTML = `
        <div class="card-body">
        <img src="${element.fotos[0]}" class="card-img-top" alt="${element.nombre}">
        <h5 class="card-title">${element.nombre}</h5>
        <p class="card-text">${element.descripcion}</p>
        
        <a href="#" class="btn btn-rojo">Ver más</a>
        </div>
        `
        cardsProductsContainer.appendChild(card)
    }
}

generateCards(productos)